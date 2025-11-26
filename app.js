// app.js

console.log("app.js načten");

// --- Konfigurace žebříčku a hry ---

const LADDER_CONFIG = [
  { level: 1,  prize: "100 Kč",       difficulty: 1 },
  { level: 2,  prize: "200 Kč",       difficulty: 1 },
  { level: 3,  prize: "300 Kč",       difficulty: 1 },
  { level: 4,  prize: "500 Kč",       difficulty: 1 },
  { level: 5,  prize: "1 000 Kč",     difficulty: 1 },
  { level: 6,  prize: "2 000 Kč",     difficulty: 2 },
  { level: 7,  prize: "4 000 Kč",     difficulty: 2 },
  { level: 8,  prize: "8 000 Kč",     difficulty: 2 },
  { level: 9,  prize: "16 000 Kč",    difficulty: 2 }, // jistá částka
  { level: 10, prize: "32 000 Kč",    difficulty: 2 },
  { level: 11, prize: "64 000 Kč",    difficulty: 3 },
  { level: 12, prize: "125 000 Kč",   difficulty: 3 }, // jistá částka
  { level: 13, prize: "250 000 Kč",   difficulty: 3 },
  { level: 14, prize: "500 000 Kč",   difficulty: 3 },
  { level: 15, prize: "1 000 000 Kč", difficulty: 3 }
];

// úrovně, které jsou „jisté“ (viz HTML – žlutě zvýrazněné)
const SAFE_LEVELS = [9, 12];

// limit na 1 otázku (v sekundách)
const QUESTION_TIME_LIMIT = 30;

// --- Stav hry ---

let gameQuestions = [];
let currentQuestionIndex = 0;
let questionLocked = false;
let gameOver = false;
let highestSafeLevelReached = 0;

let timerInterval = null;
let timeLeft = QUESTION_TIME_LIMIT;
let lifeline5050Used = false;

// DOM prvky (doplníme po DOMContentLoaded)
let statusMsgEl;
let nextBtnEl;
let timerEl;
let questionsLeftEl;
let lifeline5050Btn;

// --- Pomocné funkce ---

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function withShuffledAnswers(q) {
  const indexOrder = [0, 1, 2, 3];
  shuffle(indexOrder);

  const newAnswers = indexOrder.map(i => q.answers[i]);
  const newCorrectIndex = indexOrder.indexOf(q.correctIndex);

  return {
    ...q,
    answers: newAnswers,
    correctIndex: newCorrectIndex
  };
}

function getPrizeForLevel(level) {
  const cfg = LADDER_CONFIG.find(c => c.level === level);
  return cfg ? cfg.prize : "0 Kč";
}

// vybere 15 otázek podle obtížnosti z LADDER_CONFIG
function generateGameQuestions(activeTopics) {
  if (typeof QUESTIONS_8 === "undefined" || !Array.isArray(QUESTIONS_8)) {
    console.error("QUESTIONS_8 není načteno – zkontroluj data-questions-8.js");
    return [];
  }

  // filtr podle vybraných témat z config-topics-8.js
  let pool = QUESTIONS_8.filter(q => activeTopics.includes(q.topic));

  if (pool.length === 0) {
    console.warn("Žádné otázky pro vybraná témata:", activeTopics);
    return [];
  }

  // rozdělení podle obtížnosti
  const byDiff = {
    1: pool.filter(q => q.difficulty === 1),
    2: pool.filter(q => q.difficulty === 2),
    3: pool.filter(q => q.difficulty === 3)
  };

  shuffle(byDiff[1]);
  shuffle(byDiff[2]);
  shuffle(byDiff[3]);

  const selected = [];

  LADDER_CONFIG.forEach(cfg => {
    const list = byDiff[cfg.difficulty];
    if (!list || list.length === 0) {
      console.warn(
        "Nedostatek otázek pro obtížnost",
        cfg.difficulty,
        "v tématech",
        activeTopics
      );
      return;
    }

    let q = list.pop();

    if (typeof withShuffledAnswers === "function") {
      q = withShuffledAnswers(q);
    }

    selected.push({
      ...q,
      level: cfg.level,
      prize: cfg.prize
    });
  });

  console.log("Vygenerované otázky:", selected);
  return selected;
}

// zvýrazní správný řádek v žebříčku
function updateLadderHighlight(level) {
  const items = document.querySelectorAll(".ladder__item");
  items.forEach(li => {
    li.classList.remove("ladder__item--current");
    const liLevel = Number(li.dataset.level);
    if (liLevel === level) {
      li.classList.add("ladder__item--current");
    }
  });
}

// --- Časovač ---

function updateTimerDisplay() {
  if (!timerEl) return;
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  timerEl.textContent = `${m}:${s.toString().padStart(2, "0")}`;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  stopTimer();
  timeLeft = QUESTION_TIME_LIMIT;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft < 0) {
      stopTimer();
      // čas vypršel → jako špatná odpověď
      handleAnswer(null);
    }
  }, 1000);
}

// --- Zobrazení otázky ---

function showCurrentQuestion() {
  if (!gameQuestions || gameQuestions.length === 0) {
    console.error("Nemám žádné herní otázky.");
    return;
  }

  const q = gameQuestions[currentQuestionIndex];
  if (!q) {
    console.error("Žádná otázka pro index:", currentQuestionIndex);
    return;
  }

  questionLocked = false;

  const questionText = document.getElementById("question-text");
  questionText.textContent = q.question;

  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach((btn, idx) => {
    const textSpan = btn.querySelector(".answer-btn__text");
    if (textSpan) {
      textSpan.textContent = q.answers[idx];
    }
    btn.disabled = false;
    btn.classList.remove("correct", "incorrect", "locked");
    btn.style.opacity = "";
  });

  document.getElementById("game-question-progress").textContent =
    `Otázka ${q.level} / 15`;
  document.getElementById("game-current-prize").textContent = q.prize;

  updateLadderHighlight(q.level);

  const left = gameQuestions.length - currentQuestionIndex - 1;
  if (questionsLeftEl) {
    questionsLeftEl.textContent = left;
  }

  if (statusMsgEl) {
    statusMsgEl.textContent = "Vyberte odpověď…";
  }

  if (nextBtnEl) {
    nextBtnEl.disabled = true;
    nextBtnEl.classList.add("primary-btn--disabled");
  }

  startTimer();
}

// --- Vyhodnocení odpovědi ---

function handleAnswer(chosenIndexOrNull) {
  if (questionLocked || gameOver) return;

  const q = gameQuestions[currentQuestionIndex];
  if (!q) return;

  const correctIndex = q.correctIndex;
  const chosenIndex =
    typeof chosenIndexOrNull === "number" ? chosenIndexOrNull : null;

  questionLocked = true;
  stopTimer();

  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach((b, idx) => {
    b.disabled = true;
    b.classList.add("locked");

    if (idx === correctIndex) {
      b.classList.add("correct");
    }

    if (chosenIndex !== null && idx === chosenIndex && chosenIndex !== correctIndex) {
      b.classList.add("incorrect");
    }
  });

  const labels = ["A", "B", "C", "D"];

  if (!statusMsgEl || !nextBtnEl) return;

  if (chosenIndex === correctIndex) {
    if (SAFE_LEVELS.includes(q.level) && q.level > highestSafeLevelReached) {
      highestSafeLevelReached = q.level;
    }

    if (q.level === 15) {
      statusMsgEl.textContent = `Správně! Vyhráváš ${q.prize}. Jsi milionář!`;
      nextBtnEl.disabled = true;
      nextBtnEl.classList.add("primary-btn--disabled");
      gameOver = true;
      return;
    }

    statusMsgEl.textContent = `Správně! Získáváš ${q.prize}.`;
    nextBtnEl.disabled = false;
    nextBtnEl.classList.remove("primary-btn--disabled");
    return;
  }

  let baseMsg = chosenIndex === null ? "Vypršel čas." : "Špatně.";
  statusMsgEl.textContent = `${baseMsg} Správná odpověď byla ${labels[correctIndex]}. `;

  let guaranteedPrize = "0 Kč";
  if (highestSafeLevelReached > 0) {
    guaranteedPrize = getPrizeForLevel(highestSafeLevelReached);
  }

  statusMsgEl.textContent += `Konec hry. Odnášíš si ${guaranteedPrize}.`;

  nextBtnEl.disabled = true;
  nextBtnEl.classList.add("primary-btn--disabled");
  gameOver = true;
}

// --- 50 : 50 ---

function use5050() {
  if (lifeline5050Used || questionLocked || gameOver) return;

  const q = gameQuestions[currentQuestionIndex];
  if (!q) return;

  const correctIndex = q.correctIndex;
  const answerButtons = document.querySelectorAll(".answer-btn");

  const incorrectIndices = [];
  answerButtons.forEach((btn, idx) => {
    if (idx !== correctIndex && !btn.disabled) incorrectIndices.push(idx);
  });

  shuffle(incorrectIndices);
  const toHide = incorrectIndices.slice(0, 2);

  toHide.forEach(i => {
    const btn = answerButtons[i];
    btn.disabled = true;
    btn.classList.add("locked");
    btn.style.opacity = "0.4";
  });

  lifeline5050Used = true;
  if (lifeline5050Btn) {
    lifeline5050Btn.disabled = true;
    lifeline5050Btn.classList.add("lifeline-btn--disabled");
  }
}

// vrátí aktuálně používaná témata pro 8. ročník
function getActiveTopicsFor8Runtime() {
  // 1) zkus localStorage override
  const raw = localStorage.getItem("topics_8_override");
  if (raw) {
    try {
      const ids = JSON.parse(raw);
      if (Array.isArray(ids) && ids.length > 0) {
        return ids;
      }
    } catch (e) {
      console.warn("Chyba při čtení topics_8_override:", e);
    }
  }

  // 2) fallback: config-topics-8.js
  if (typeof getEnabledTopicsFor8 === "function") {
    return getEnabledTopicsFor8();
  }

  // 3) nouzový fallback
  return ["prace", "kladky", "vykon", "ucinnost", "Ep", "Ek"];
}


// --- DOM ready ---

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const screenLanding = document.getElementById("screen-landing");
  const screenGame = document.getElementById("screen-game");

  const grade8Btn = document.querySelector('.grade-card[data-grade="8"]');
  const exitGameBtn = document.getElementById("btn-exit-game");

  statusMsgEl = document.getElementById("game-status-message");
  nextBtnEl = document.getElementById("btn-next-question");
  timerEl = document.getElementById("game-timer");
  questionsLeftEl = document.getElementById("game-questions-left");
  lifeline5050Btn = document.querySelector('.lifeline-btn[data-lifeline="5050"]');

  const answerButtons = document.querySelectorAll(".answer-btn");

  // ---------- TEACHER PANEL – DOM prvky ----------
  const teacherPanel = document.getElementById("teacher-panel");
  const teacherTopicList = document.getElementById("teacher-topic-list");
  const teacherGenerateBtn = document.getElementById("teacher-generate");
  const teacherCloseBtn = document.getElementById("teacher-close");
  const teacherOutputWrapper = document.getElementById("teacher-output-wrapper");
  const teacherOutput = document.getElementById("teacher-output");

  function openTeacherPanel() {
    if (!teacherPanel || !teacherTopicList) return;

    teacherTopicList.innerHTML = "";
    if (teacherOutputWrapper) teacherOutputWrapper.classList.add("hidden");
    if (teacherOutput) teacherOutput.value = "";

    TOPIC_CONFIG_8.topics.forEach(t => {
      const row = document.createElement("label");
      row.innerHTML = `
        <input type="checkbox" data-id="${t.id}" ${t.enabled ? "checked" : ""}>
        ${t.label}
      `;
      teacherTopicList.appendChild(row);
    });

    teacherPanel.classList.remove("hidden");
  }

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
      e.preventDefault();
      openTeacherPanel();
    }
  });

  if (teacherCloseBtn) {
    teacherCloseBtn.addEventListener("click", () => {
      teacherPanel.classList.add("hidden");
    });
  }

  if (teacherGenerateBtn) {
    teacherGenerateBtn.addEventListener("click", () => {
      if (!teacherTopicList || !teacherOutput || !teacherOutputWrapper) return;

      const checkboxes = teacherTopicList.querySelectorAll("input[type=checkbox]");

      checkboxes.forEach(cb => {
        const id = cb.dataset.id;
        const topic = TOPIC_CONFIG_8.topics.find(t => t.id === id);
        if (topic) {
          topic.enabled = cb.checked;
        }
      });

      const lines = [];
      lines.push('const TOPIC_CONFIG_8 = {');
      lines.push('  schoolYear: "2024/2025",');
      lines.push('  topics: [');

      TOPIC_CONFIG_8.topics.forEach((t, index) => {
        const comma = index === TOPIC_CONFIG_8.topics.length - 1 ? "" : ",";
        lines.push(`    { id: "${t.id}", label: "${t.label}", enabled: ${t.enabled} }${comma}`);
      });

      lines.push('  ]');
      lines.push('};');
      lines.push('');
      lines.push('function getEnabledTopicsFor8() {');
      lines.push('  return TOPIC_CONFIG_8.topics');
      lines.push('    .filter(t => t.enabled)');
      lines.push('    .map(t => t.id);');
      lines.push('}');

      teacherOutput.value = lines.join("\n");
      teacherOutputWrapper.classList.remove("hidden");
    });
  }

  // ---------- přepínání obrazovek ----------
  function showScreen(screen) {
    if (screen === "landing") {
      screenLanding.classList.add("screen--active");
      screenLanding.classList.remove("screen--hidden");

      screenGame.classList.remove("screen--active");
      screenGame.classList.add("screen--hidden");
    } else if (screen === "game") {
      screenGame.classList.add("screen--active");
      screenGame.classList.remove("screen--hidden");

      screenLanding.classList.remove("screen--active");
      screenLanding.classList.add("screen--hidden");
    }
  }

  // ---------- Klik na odpověď ----------
  answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.answer);
      handleAnswer(idx);
    });
  });

  // ---------- Další otázka ----------
  if (nextBtnEl) {
    nextBtnEl.addEventListener("click", () => {
      if (gameOver) return;
      if (currentQuestionIndex < gameQuestions.length - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
      } else {
        statusMsgEl.textContent = "Konec hry! To byla poslední otázka.";
        nextBtnEl.disabled = true;
        nextBtnEl.classList.add("primary-btn--disabled");
        gameOver = true;
      }
    });
  }

  // ---------- 50 : 50 ----------
  if (lifeline5050Btn) {
    lifeline5050Btn.addEventListener("click", () => {
      use5050();
    });
  }

  // ---------- start hry pro 8. třídu ----------
 if (grade8Btn) {
  grade8Btn.addEventListener("click", () => {
    console.log("Klik na 8. třídu");

    highestSafeLevelReached = 0;
    gameOver = false;
    lifeline5050Used = false;

    if (lifeline5050Btn) {
      lifeline5050Btn.disabled = false;
      lifeline5050Btn.classList.remove("lifeline-btn--disabled");
    }

    const activeTopics = getActiveTopicsFor8Runtime();
    console.log("Aktivní témata pro 8. třídu:", activeTopics);

    gameQuestions = generateGameQuestions(activeTopics);
    if (!gameQuestions || gameQuestions.length === 0) {
      alert("Nepodařilo se načíst otázky pro vybraná témata.");
      return;
    }

    currentQuestionIndex = 0;
    showCurrentQuestion();
    showScreen("game");
  });
}


  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      stopTimer();
      gameOver = true;
      showScreen("landing");
    });
  }
});
