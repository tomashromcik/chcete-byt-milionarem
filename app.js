// app.js

console.log("app.js načten");

const LADDER_CONFIG = [
  { level: 1,  prize: "100 Kč",      difficulty: 1 },
  { level: 2,  prize: "200 Kč",      difficulty: 1 },
  { level: 3,  prize: "300 Kč",      difficulty: 1 },
  { level: 4,  prize: "500 Kč",      difficulty: 1 },
  { level: 5,  prize: "1 000 Kč",    difficulty: 1 },
  { level: 6,  prize: "2 000 Kč",    difficulty: 2 },
  { level: 7,  prize: "4 000 Kč",    difficulty: 2 },
  { level: 8,  prize: "8 000 Kč",    difficulty: 2 },
  { level: 9,  prize: "16 000 Kč",   difficulty: 2 },
  { level: 10, prize: "32 000 Kč",   difficulty: 2 },
  { level: 11, prize: "64 000 Kč",   difficulty: 3 },
  { level: 12, prize: "125 000 Kč",  difficulty: 3 },
  { level: 13, prize: "250 000 Kč",  difficulty: 3 },
  { level: 14, prize: "500 000 Kč",  difficulty: 3 },
  { level: 15, prize: "1 000 000 Kč",difficulty: 3 }
];

let gameQuestions = [];
let currentQuestionIndex = 0;

// --- Pomocné funkce ---

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// vybere 15 otázek podle obtížností z LADDER_CONFIG
function generateGameQuestions() {
  if (!Array.isArray(window.QUESTIONS_8)) {
    console.error("QUESTIONS_8 není načteno – zkontroluj data-questions-8.js");
    return [];
  }

  const pool = [...window.QUESTIONS_8];

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
      console.warn("Nedostatek otázek pro obtížnost", cfg.difficulty);
      return;
    }
    const q = list.pop();
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

// zobrazí aktuální otázku podle currentQuestionIndex
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

  // text otázky
  const questionText = document.getElementById("question-text");
  questionText.textContent = q.question;

  // odpovědi
  const answerButtons = document.querySelectorAll(".answer-btn");
  answerButtons.forEach((btn, idx) => {
    const textSpan = btn.querySelector(".answer-btn__text");
    if (textSpan) {
      textSpan.textContent = q.answers[idx];
    }
    btn.disabled = false;
    btn.classList.remove("correct", "incorrect", "locked");
  });

  // horní info
  document.getElementById("game-question-progress").textContent =
    `Otázka ${q.level} / 15`;
  document.getElementById("game-current-prize").textContent = q.prize;

  // žebříček
  updateLadderHighlight(q.level);

  // status message
  document.getElementById("game-status-message").textContent = "Vyberte odpověď…";

  // tlačítko další otázka zakázat
  const nextBtn = document.getElementById("btn-next-question");
  nextBtn.disabled = true;
  nextBtn.classList.add("primary-btn--disabled");
}

// --- Přepínání obrazovek & start hry ---

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const screenLanding = document.getElementById("screen-landing");
  const screenGame = document.getElementById("screen-game");

  const grade8Btn = document.querySelector('.grade-card[data-grade="8"]');
  const exitGameBtn = document.getElementById("btn-exit-game");

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

  // start hry pro 8. třídu
  if (grade8Btn) {
    grade8Btn.addEventListener("click", () => {
      console.log("Klik na 8. třídu");

      gameQuestions = generateGameQuestions();
      if (!gameQuestions || gameQuestions.length === 0) {
        alert("Nepodařilo se načíst otázky pro 8. třídu.");
        return;
      }

      currentQuestionIndex = 0;
      showCurrentQuestion();
      showScreen("game");
    });
  }

  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      showScreen("landing");
    });
  }
});
