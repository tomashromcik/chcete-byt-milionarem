// app.js

console.log("app.js načten");

// ------------------------------------------------------
// KONFIGURACE ŽEBŘÍČKU A HRY
// ------------------------------------------------------

// 15 úrovní + obtížnosti + částky
const LADDER_CONFIG = [
  { level: 1, prize: "1 000 Kč", difficulty: 1 },
  { level: 2, prize: "2 000 Kč", difficulty: 1 },
  { level: 3, prize: "3 000 Kč", difficulty: 1 },
  { level: 4, prize: "5 000 Kč", difficulty: 1 },
  { level: 5, prize: "10 000 Kč", difficulty: 1 }, // jistá částka
  { level: 6, prize: "20 000 Kč", difficulty: 2 },
  { level: 7, prize: "40 000 Kč", difficulty: 2 },
  { level: 8, prize: "80 000 Kč", difficulty: 2 },
  { level: 9, prize: "160 000 Kč", difficulty: 2 },
  { level: 10, prize: "320 000 Kč", difficulty: 2 }, // jistá částka
  { level: 11, prize: "640 000 Kč", difficulty: 3 },
  { level: 12, prize: "1 250 000 Kč", difficulty: 3 },
  { level: 13, prize: "2 500 000 Kč", difficulty: 3 },
  { level: 14, prize: "5 000 000 Kč", difficulty: 3 },
  { level: 15, prize: "10 000 000 Kč", difficulty: 3 }
];

// jisté částky
const SAFE_LEVELS = [5, 10];

// základní časy pro obtížnosti (s)
const TIME_LIMIT_BY_DIFFICULTY = {
  1: 90, // 1,5 minuty
  2: 120, // 2 minuty
  3: 150 // 2,5 minuty
};

// ------------------------------------------------------
// STAV HRY
// ------------------------------------------------------

let gameQuestions = [];
let currentQuestionIndex = 0;
let questionLocked = false;
let gameOver = false;
let highestSafeLevelReached = 0;

let timerInterval = null;
let timeLeft = 0;
let lifeline5050Used = false;
let lifelineCallUsed = false;
let lifelineClassUsed = false;
let lifelineSwapUsed = false;


// DOM prvky – doplníme po DOMContentLoaded
let statusMsgEl;
let nextBtnEl;
let timerEl;
let questionsLeftEl;
let lifeline5050Btn;
let lifelineCallBtn;
let lifelineClassBtn;
let lifelineSwapBtn;

let teacherAuthenticated = false;

// ------------------------------------------------------
// POMOCNÉ FUNKCE
// ------------------------------------------------------

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// vrátí kopii otázky s náhodně promíchanými odpověďmi
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

// aktivní témata pro 8. ročník – runtime (localStorage → config → fallback)
function getActiveTopicsFor8Runtime() {
  // zkus localStorage
  try {
    const raw = localStorage.getItem("topics_8_override");
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length > 0) {
        return arr;
      }
    }
  } catch (e) {
    console.warn("Chyba při čtení topics_8_override:", e);
  }

  // zkus config-topics-8.js
  if (typeof getEnabledTopicsFor8 === "function") {
    return getEnabledTopicsFor8();
  }

  // nouzový fallback: všechna témata
  return ["prace", "kladky", "vykon", "ucinnost", "Ep", "Ek"];
}

// aktivní témata pro 9. ročník – runtime (localStorage → config → fallback)
function getActiveTopicsFor9Runtime() {
  // 1) zkus localStorage
  try {
    const raw = localStorage.getItem("topics_9_override");
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr) && arr.length > 0) {
        return arr;
      }
    }
  } catch (e) {
    console.warn("Chyba při čtení topics_9_override:", e);
  }

  // 2) zkus config-topics-9.js
  if (typeof getEnabledTopicsFor9 === "function") {
    return getEnabledTopicsFor9();
  }

  // 3) nouzový fallback – všechna témata deváťáků
  return ["magnetismus", "elektromagneticke_jevy", "stridavy_proud"];
}


// vytvoří pole 15 otázek podle nastavení žebříčku a témat
function generateGameQuestions(activeTopics, grade) {
  // 1) vybereme správnou databanku podle ročníku
  let sourceQuestions;

  if (grade === 9) {
    if (typeof QUESTIONS_9 === "undefined" || !Array.isArray(QUESTIONS_9)) {
      console.error("QUESTIONS_9 není načteno – zkontroluj data-questions-9.js");
      return [];
    }
    sourceQuestions = QUESTIONS_9;
  } else {
    // defaultně 8. ročník (nebo když by grade byl jiný)
    if (typeof QUESTIONS_8 === "undefined" || !Array.isArray(QUESTIONS_8)) {
      console.error("QUESTIONS_8 není načteno – zkontroluj data-questions-8.js");
      return [];
    }
    sourceQuestions = QUESTIONS_8;
  }

  // 2) filtr podle témat
  let pool = sourceQuestions.filter(q => activeTopics.includes(q.topic));

  if (!pool.length) {
    console.warn("Žádné otázky pro vybraná témata:", activeTopics, "pro ročník", grade);
    return [];
  }

  // 3) rozdělení podle obtížnosti (zůstává tvoje logika)
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
    if (!list || !list.length) {
      console.warn(
        "Nedostatek otázek pro obtížnost",
        cfg.difficulty,
        "v tématech",
        activeTopics,
        "pro ročník",
        grade
      );
      return;
    }

    let q = list.pop();

    q = withShuffledAnswers(q);

    selected.push({
      ...q,
      level: cfg.level,
      prize: cfg.prize
    });
  });

  console.log("Vygenerované otázky:", selected);
  return selected;
}


// zvýrazní aktuální řádek v žebříčku
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

// ------------------------------------------------------
// ČASOVAČ
// ------------------------------------------------------

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

// nastaví timeLeft podle obtížnosti aktuální otázky
function setTimeForCurrentQuestion() {
  const q = gameQuestions[currentQuestionIndex];
  if (!q) {
    timeLeft = 0;
    return;
  }
  const base = TIME_LIMIT_BY_DIFFICULTY[q.difficulty] || 90;
  timeLeft = base;
}

function startTimer() {
  stopTimer();
  setTimeForCurrentQuestion();
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimerDisplay();
      stopTimer();
      // čas vypršel → jako špatná odpověď
      handleAnswer(null);
      return;
    }

    updateTimerDisplay();
  }, 1000);
}

// ------------------------------------------------------
// ZOBRAZENÍ OTÁZKY
// ------------------------------------------------------

function showCurrentQuestion() {
  if (!gameQuestions || !gameQuestions.length) {
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
  if (questionText) {
    questionText.textContent = q.question;
  }

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

  const progressEl = document.getElementById("game-question-progress");
  if (progressEl) {
    progressEl.textContent = `Otázka ${q.level} / 15`;
  }

  const prizeEl = document.getElementById("game-current-prize");
  if (prizeEl) {
    prizeEl.textContent = q.prize;
  }

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

// ------------------------------------------------------
// VYHODNOCENÍ ODPOVĚDI
// ------------------------------------------------------

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

    if (
      chosenIndex !== null &&
      idx === chosenIndex &&
      chosenIndex !== correctIndex
    ) {
      b.classList.add("incorrect");
    }
  });

  const labels = ["A", "B", "C", "D"];

  if (!statusMsgEl || !nextBtnEl) return;

  // správná odpověď
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

  // špatná odpověď nebo vypršel čas
  let baseMsg = chosenIndex === null ? "Vypršel čas." : "Špatně.";
  statusMsgEl.textContent = `${baseMsg} Správná odpověď byla ${
    labels[correctIndex]
  }. `;

  let guaranteedPrize = "0 Kč";
  if (highestSafeLevelReached > 0) {
    guaranteedPrize = getPrizeForLevel(highestSafeLevelReached);
  }

  statusMsgEl.textContent += `Konec hry. Odnášíš si ${guaranteedPrize}.`;

  nextBtnEl.disabled = true;
  nextBtnEl.classList.add("primary-btn--disabled");
  gameOver = true;
}

// ------------------------------------------------------
// NÁPOVĚDA 50 : 50
// ------------------------------------------------------

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
    btn.style.opacity = "0.35";
  });

  lifeline5050Used = true;
  if (lifeline5050Btn) {
    lifeline5050Btn.disabled = true;
    lifeline5050Btn.classList.add("lifeline-btn--disabled");
  }
}

// ------------------------------------------------------
// NÁPOVĚDA zavolej učitele
// ------------------------------------------------------

function useCallTeacher() {
  if (lifelineCallUsed || gameOver) return;

  // zastavit čas
  stopTimer();
  lifelineCallUsed = true;

  if (lifelineCallBtn) {
    lifelineCallBtn.disabled = true;
    lifelineCallBtn.classList.add("lifeline-btn--disabled");
  }

  if (statusMsgEl) {
    statusMsgEl.textContent =
      "Nápověda: zavolej učitele. Čas je zastaven – po konzultaci vyber odpověď.";
  }
}

// ------------------------------------------------------
// NÁPOVĚDA pomoc třídy
// ------------------------------------------------------

function useClassHelp() {
  if (lifelineClassUsed || gameOver) return;

  // zastavit čas
  stopTimer();
  lifelineClassUsed = true;

  if (lifelineClassBtn) {
    lifelineClassBtn.disabled = true;
    lifelineClassBtn.classList.add("lifeline-btn--disabled");
  }

  if (statusMsgEl) {
    statusMsgEl.textContent =
      "Nápověda: pomoc třídy. Čas je zastaven – žáci můžou hlasovat, pak vyber odpověď.";
  }
}

// ------------------------------------------------------
// NÁPOVĚDA výměna otázky
// ------------------------------------------------------

function useSwapQuestion() {
  // jednou za hru, pouze na "živé" otázce
  if (lifelineSwapUsed || questionLocked || gameOver) return;

  const currentQ = gameQuestions[currentQuestionIndex];
  if (!currentQ) return;

  // najdeme jiné otázky stejné obtížnosti v rámci už vygenerované hry
  const candidates = gameQuestions
    .map((q, idx) => ({ q, idx }))
    .filter(
      (item) =>
        item.idx !== currentQuestionIndex &&
        item.q.difficulty === currentQ.difficulty
    );

  if (candidates.length === 0) {
    if (statusMsgEl) {
      statusMsgEl.textContent =
        "Není k dispozici jiná otázka stejné obtížnosti.";
    }
    return;
  }

  // vybereme náhodnou jinou otázku stejné obtížnosti
  const randomItem =
    candidates[Math.floor(Math.random() * candidates.length)];
  const swapIndex = randomItem.idx;
  const swapQ = randomItem.q;

  // zachováme level a prize (stupeň a částku)
  const currentLevel = currentQ.level;
  const currentPrize = currentQ.prize;
  const swapLevel = swapQ.level;
  const swapPrize = swapQ.prize;

  // prohodíme obsah otázek, ale
  // level + prize necháme na svých pozicích
  gameQuestions[currentQuestionIndex] = {
    ...swapQ,
    level: currentLevel,
    prize: currentPrize
  };

  gameQuestions[swapIndex] = {
    ...currentQ,
    level: swapLevel,
    prize: swapPrize
  };

  lifelineSwapUsed = true;
  if (lifelineSwapBtn) {
    lifelineSwapBtn.disabled = true;
    lifelineSwapBtn.classList.add("lifeline-btn--disabled");
  }

  // znovu vykreslit aktuální otázku (časovač se resetuje uvnitř showCurrentQuestion)
  showCurrentQuestion();

  if (statusMsgEl) {
    statusMsgEl.textContent = "Otázka byla vyměněna. Vyberte odpověď…";
  }
}



// ------------------------------------------------------
// UČITELSKÝ PANEL
// ------------------------------------------------------

function openTeacherPanel() {
  const panel = document.getElementById("teacher-panel");
  const topicList = document.getElementById("teacher-topic-list");
  const outputWrapper = document.getElementById("teacher-output-wrapper");
  const output = document.getElementById("teacher-output");

  if (!panel || !topicList) return;

  // vymazání starého obsahu
  topicList.innerHTML = "";
  if (outputWrapper) outputWrapper.classList.add("hidden");
  if (output) output.value = "";

  // --- 8. třída ---
  if (typeof TOPIC_CONFIG_8 === "object" && Array.isArray(TOPIC_CONFIG_8.topics)) {
    const h3_8 = document.createElement("h3");
    h3_8.textContent = "Témata pro 8. třídu:";
    topicList.appendChild(h3_8);

    TOPIC_CONFIG_8.topics.forEach(t => {
      const row = document.createElement("label");
      row.innerHTML = `
        <input type="checkbox" data-id="${t.id}" data-grade="8" ${t.enabled ? "checked" : ""}>
        ${t.label}
      `;
      topicList.appendChild(row);
    });
  }

  // --- oddělovač ---
  const hr = document.createElement("hr");
  topicList.appendChild(hr);

  // --- 9. třída ---
  if (typeof TOPIC_CONFIG_9 === "object" && Array.isArray(TOPIC_CONFIG_9.topics)) {
    const h3_9 = document.createElement("h3");
    h3_9.textContent = "Témata pro 9. třídu:";
    topicList.appendChild(h3_9);

    TOPIC_CONFIG_9.topics.forEach(t => {
      const row = document.createElement("label");
      row.innerHTML = `
        <input type="checkbox" data-id="${t.id}" data-grade="9" ${t.enabled ? "checked" : ""}>
        ${t.label}
      `;
      topicList.appendChild(row);
    });
  }

  panel.classList.remove("hidden");
  bindTeacherPanelHandlers();
}





// ------------------------------------------------------
// DOMContentLoaded
// ------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const screenLanding = document.getElementById("screen-landing");
  const screenGame = document.getElementById("screen-game");

  const grade8Card = document.querySelector('.grade-card[data-grade="8"]');
  const grade9Card = document.querySelector('.grade-card[data-grade="9"]');
  const exitGameBtn = document.getElementById("btn-exit-game");

  statusMsgEl = document.getElementById("game-status-message");
  nextBtnEl = document.getElementById("btn-next-question");
  timerEl = document.getElementById("game-timer");
  questionsLeftEl = document.getElementById("game-questions-left");
  lifeline5050Btn = document.querySelector(
    '.lifeline-btn[data-lifeline="5050"]'
  );
lifelineCallBtn = document.querySelector(
  '.lifeline-btn[data-lifeline="call"]'
);
lifelineClassBtn = document.querySelector(
  '.lifeline-btn[data-lifeline="class-help"]'
);
lifelineSwapBtn = document.querySelector(
  '.lifeline-btn[data-lifeline="swap"]'
);


  const answerButtons = document.querySelectorAll(".answer-btn");

  // TEACHER PANEL – DOM prvky
  const teacherPanel = document.getElementById("teacher-panel");
  const teacherTopicList = document.getElementById("teacher-topic-list");
  const teacherGenerateBtn = document.getElementById("teacher-generate");
  const teacherSaveLocalBtn = document.getElementById("teacher-save-local");
  const teacherCloseBtn = document.getElementById("teacher-close");
  const teacherOutputWrapper = document.getElementById(
    "teacher-output-wrapper"
  );
  const teacherOutput = document.getElementById("teacher-output");

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

  // klik na odpověď
  answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.answer);
      handleAnswer(idx);
    });
  });

  // další otázka
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

  // 50 : 50
  if (lifeline5050Btn) {
    lifeline5050Btn.addEventListener("click", () => {
      if (gameOver) return;
      use5050();
    });
  }
  // zavolej učitele
  if (lifelineCallBtn) {
  lifelineCallBtn.addEventListener("click", () => {
    if (gameOver) return;
    useCallTeacher();
  });
}

// pomoc třídy
  if (lifelineClassBtn) {
  lifelineClassBtn.addEventListener("click", () => {
    if (gameOver) return;
    useClassHelp();
  });
}

  // výměna otázky
if (lifelineSwapBtn) {
  lifelineSwapBtn.addEventListener("click", () => {
    if (gameOver) return;
    useSwapQuestion();
  });
}


  // start hry – pomocná funkce, sdílená pro 8. i 9. třídu
 function startGameForGrade(grade) {
  console.log("Start hry pro ročník", grade);

  // reset stavu hry
  highestSafeLevelReached = 0;
  gameOver = false;
  questionLocked = false;

  // reset nápověd
  lifeline5050Used = false;
  lifelineCallUsed = false;
  lifelineClassUsed = false;
  lifelineSwapUsed = false;

  // znovu povolíme všechny nápovědy
  if (lifeline5050Btn) {
    lifeline5050Btn.disabled = false;
    lifeline5050Btn.classList.remove("lifeline-btn--disabled");
  }
  if (lifelineCallBtn) {
    lifelineCallBtn.disabled = false;
    lifelineCallBtn.classList.remove("lifeline-btn--disabled");
  }
  if (lifelineClassBtn) {
    lifelineClassBtn.disabled = false;
    lifelineClassBtn.classList.remove("lifeline-btn--disabled");
  }
  if (lifelineSwapBtn) {
    lifelineSwapBtn.disabled = false;
    lifelineSwapBtn.classList.remove("lifeline-btn--disabled");
  }

  // vybereme aktivní témata podle ročníku
    let activeTopics;

  if (grade === 8) {
    // tvoje stávající logika pro 8. třídu
    if (typeof getActiveTopicsFor8Runtime === "function") {
      activeTopics = getActiveTopicsFor8Runtime();
    } else if (typeof getEnabledTopicsFor8 === "function") {
      activeTopics = getEnabledTopicsFor8();
    } else {
      activeTopics = ["prace", "kladky", "vykon", "ucinnost", "Ep", "Ek"];
    }
  } else if (grade === 9) {
    // NOVÁ LOGIKA PRO 9. TŘÍDU – používá nová témata
    if (typeof getActiveTopicsFor9Runtime === "function") {
      activeTopics = getActiveTopicsFor9Runtime();
    } else if (typeof getEnabledTopicsFor9 === "function") {
      activeTopics = getEnabledTopicsFor9();
    } else {
      // fallback témata pro 9. ročník
      activeTopics = ["magnetismus", "elektromagneticke_jevy", "stridavy_proud"];
    }
  } else {
    // nouzový fallback – kdyby se něco pokazilo
    activeTopics = ["prace", "kladky", "vykon", "ucinnost", "Ep", "Ek"];
  }

  console.log("Aktivní témata:", activeTopics);

  // vygenerujeme otázky
  gameQuestions = generateGameQuestions(activeTopics, grade);
  if (!gameQuestions || gameQuestions.length === 0) {
    alert("Nepodařilo se načíst otázky pro vybraná témata.");
    return;
  }

  currentQuestionIndex = 0;
  showCurrentQuestion();
  showScreen("game");
}



  // start hry pro 8. třídu – klik na celou kartu
  if (grade8Card) {
    grade8Card.addEventListener("click", () => {
      if (grade8Card.classList.contains("grade-card--disabled")) return;
      startGameForGrade(8);
    });
  }

  // start hry pro 9. třídu – zatím stejné otázky jako pro 8.
  if (grade9Card) {
    grade9Card.addEventListener("click", () => {
      if (grade9Card.classList.contains("grade-card--disabled")) return;
      startGameForGrade(9);
    });
  }

  // ukončit hru
  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      stopTimer();
      gameOver = true;
      showScreen("landing");
    });
  }

  // TEACHER PANEL – Ctrl+U + heslo
  document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
      e.preventDefault();

      if (!teacherAuthenticated) {
        const pwd = prompt("Zadej heslo učitele:");
        if (pwd !== "ZSBoh74719") {
          alert("Nesprávné heslo.");
          return;
        }
        teacherAuthenticated = true;
      }

      openTeacherPanel();
    }
  });

  if (teacherCloseBtn) {
    teacherCloseBtn.addEventListener("click", () => {
      if (teacherPanel) teacherPanel.classList.add("hidden");
    });
  }

// uložit do localStorage pro 8. i 9. třídu
if (teacherSaveLocalBtn) {
  teacherSaveLocalBtn.addEventListener("click", () => {
    if (!teacherTopicList) return;

    const checkboxes = teacherTopicList.querySelectorAll(
      "input[type=checkbox]"
    );

    const enabledIds8 = [];
    const enabledIds9 = [];

    checkboxes.forEach(cb => {
      const grade = cb.dataset.grade || "8"; // pokud náhodou není, bereme jako 8
      if (cb.checked) {
        if (grade === "9") {
          enabledIds9.push(cb.dataset.id);
        } else {
          enabledIds8.push(cb.dataset.id);
        }
      }
    });

    try {
      // uložíme zvlášť pro 8 a 9
      localStorage.setItem("topics_8_override", JSON.stringify(enabledIds8));
      localStorage.setItem("topics_9_override", JSON.stringify(enabledIds9));

      alert(
        "Témata pro 8. a 9. ročník byla uložena pouze pro tuto třídu (localStorage)."
      );
    } catch (e) {
      console.error("Chyba při ukládání do localStorage:", e);
      alert("Nepodařilo se uložit nastavení do localStorage.");
    }
  });
}

// vygenerovat kód pro config-topics-8.js a config-topics-9.js
if (teacherGenerateBtn) {
  teacherGenerateBtn.addEventListener("click", () => {
    if (!teacherTopicList || !teacherOutput || !teacherOutputWrapper) return;

    const checkboxes = teacherTopicList.querySelectorAll(
      "input[type=checkbox]"
    );

    // nejdřív zkontrolujeme, že configy existují
    if (
      typeof TOPIC_CONFIG_8 !== "object" ||
      !Array.isArray(TOPIC_CONFIG_8.topics)
    ) {
      alert("TOPIC_CONFIG_8 není správně načten.");
      return;
    }

    if (
      typeof TOPIC_CONFIG_9 !== "object" ||
      !Array.isArray(TOPIC_CONFIG_9.topics)
    ) {
      alert("TOPIC_CONFIG_9 není správně načten.");
      return;
    }

    // přepíšeme enabled podle checkboxů
    checkboxes.forEach(cb => {
      const id = cb.dataset.id;
      const grade = cb.dataset.grade || "8";

      if (grade === "9") {
        const topic9 = TOPIC_CONFIG_9.topics.find(t => t.id === id);
        if (topic9) {
          topic9.enabled = cb.checked;
        }
      } else {
        const topic8 = TOPIC_CONFIG_8.topics.find(t => t.id === id);
        if (topic8) {
          topic8.enabled = cb.checked;
        }
      }
    });

    const lines = [];

    // ---------- config pro 8. třídu ----------
    lines.push("const TOPIC_CONFIG_8 = {");
    lines.push('  schoolYear: "2024/2025",');
    lines.push("  topics: [");

    TOPIC_CONFIG_8.topics.forEach((t, index) => {
      const comma = index === TOPIC_CONFIG_8.topics.length - 1 ? "" : ",";
      lines.push(
        `    { id: "${t.id}", label: "${t.label}", enabled: ${t.enabled} }${comma}`
      );
    });

    lines.push("  ]");
    lines.push("};");
    lines.push("");
    lines.push("function getEnabledTopicsFor8() {");
    lines.push("  return TOPIC_CONFIG_8.topics");
    lines.push("    .filter(t => t.enabled)");
    lines.push("    .map(t => t.id);");
    lines.push("}");
    lines.push("");
    lines.push("// ========================================");
    lines.push("// KONFIGURACE TÉMAT PRO 9. ROČNÍK");
    lines.push("// ========================================");
    lines.push("");

    // ---------- config pro 9. třídu ----------
    lines.push("const TOPIC_CONFIG_9 = {");
    lines.push('  schoolYear: "2024/2025",');
    lines.push("  topics: [");

    TOPIC_CONFIG_9.topics.forEach((t, index) => {
      const comma = index === TOPIC_CONFIG_9.topics.length - 1 ? "" : ",";
      lines.push(
        `    { id: "${t.id}", label: "${t.label}", enabled: ${t.enabled} }${comma}`
      );
    });

    lines.push("  ]");
    lines.push("};");
    lines.push("");
    lines.push("function getEnabledTopicsFor9() {");
    lines.push("  return TOPIC_CONFIG_9.topics");
    lines.push("    .filter(t => t.enabled)");
    lines.push("    .map(t => t.id);");
    lines.push("}");

    teacherOutput.value = lines.join("\n");
    teacherOutputWrapper.classList.remove("hidden");
  });
}


  document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const el = document.querySelector(".copyright");
  if (el) {
    el.textContent = `© 2024–${year} Tomáš Hromčík · Všechna práva vyhrazena`;
  }
});

});
