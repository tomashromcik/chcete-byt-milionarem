// app.js

document.addEventListener("DOMContentLoaded", () => {
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

  if (grade8Btn) {
    grade8Btn.addEventListener("click", () => {
      // sem později napojíš načtení otázek pro 8. třídu
      showScreen("game");
    });
  }

  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      // případně potvrzení "opravdu ukončit?"
      showScreen("landing");
    });
  }
});
