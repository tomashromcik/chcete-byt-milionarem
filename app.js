// app.js

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

  if (grade8Btn) {
    grade8Btn.addEventListener("click", () => {
      console.log("Klik na 8. třídu");
      showScreen("game");
    });
  } else {
    console.warn("Nenalezeno tlačítko pro 8. třídu");
  }

  if (exitGameBtn) {
    exitGameBtn.addEventListener("click", () => {
      console.log("Klik na Ukončit hru");
      showScreen("landing");
    });
  } else {
    console.warn("Nenalezeno tlačítko Ukončit hru");
  }
});
