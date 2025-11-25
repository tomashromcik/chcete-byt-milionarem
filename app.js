// app.js
let gameQuestions = [];
let currentQuestionIndex = 0;


console.log("app.js načten");

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

  let gameQuestions = [];

grade8Btn.addEventListener("click", () => {
  console.log("Klik na 8. třídu");

  gameQuestions = generateGameQuestions();   // vytvoří sadu 15 otázek
  currentQuestionIndex = 0;

  showCurrentQuestion();
  showScreen("game");
});



  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      console.log("Klik na Ukončit hru");
      showScreen("landing");
    });
  } else {
    console.warn("Nenalezeno tlačítko Ukončit hru");
  }
});

// konfigurace žebříčku – výhry + požadovaná obtížnost
const LADDER_CONFIG = [
  { level: 1,  prize: "100 Kč",   difficulty: 1 },
  { level: 2,  prize: "200 Kč",   difficulty: 1 },
  { level: 3,  prize: "300 Kč",   difficulty: 1 },
  { level: 4,  prize: "500 Kč",   difficulty: 1 },
  { level: 5,  prize: "1 000 Kč", difficulty: 1 },

  { level: 6,  prize: "2 000 Kč", difficulty: 2 },
  { level: 7,  prize: "4 000 Kč", difficulty: 2 },
  { level: 8,  prize: "8 000 Kč", difficulty: 2 },
  { level: 9,  prize: "16 000 Kč", difficulty: 2 },
  { level:10,  prize: "32 000 Kč", difficulty: 2 },

  { level:11,  prize: "64 000 Kč",  difficulty: 3 },
  { level:12,  prize: "125 000 Kč", difficulty: 3 },
  { level:13,  prize: "250 000 Kč", difficulty: 3 },
  { level:14,  prize: "500 000 Kč", difficulty: 3 },
  { level:15,  prize: "1 000 000 Kč", difficulty: 3 }
];

// jednoduché zamíchání pole (Fisher–Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// vygeneruje sadu 15 otázek pro hru podle obtížnosti
function generateGameQuestions() {
  // zkopírujeme si pole, ať nepřepisujeme původní
  const pool = [...QUESTIONS_8];

  // rozdělit podle obtížnosti
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
    if (list.length === 0) {
      console.warn("Nedostatek otázek pro obtížnost", cfg.difficulty);
      return;
    }
    // vezmeme poslední otázku ze zamíchaného seznamu
    const q = list.pop();
    selected.push({
      ...q,
      level: cfg.level,
      prize: cfg.prize
    });
  });

  return selected;
}

function showCurrentQuestion() {
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
    btn.querySelector(".answer-btn__text").textContent = q.answers[idx];
    btn.classList.remove("correct", "incorrect", "locked"); // reset stylů na začátku
    btn.disabled = false;
  });

  // horní info
  document.getElementById("game-question-progress").textContent =
    `Otázka ${q.level} / 15`;

  document.getElementById("game-current-prize").textContent = q.prize;

  // status message reset
  document.getElementById("game-status-message").textContent = "Vyberte odpověď…";

  // disable next question button
  document.getElementById("btn-next-question").disabled = true;
  document.getElementById("btn-next-question").classList.add("primary-btn--disabled");
}

