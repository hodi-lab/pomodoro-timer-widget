const pomodoroTimeInput = document.querySelector("#pomodoro");
const shortBreakTimeInput = document.querySelector("#short-break");
const longBreakTimeInput = document.querySelector("#long-break");

const pomodoroModeTime = document.querySelector("[data-pomodoro]");
const shortBreakModeTime = document.querySelector("[data-short-break]");
const longBreakModeTime = document.querySelector("[data-long-break]");

export function loadSettings() {
  if (!window.settings) return;
  populateSettingsForm(window.settings);
  setAppSettings(window.settings);
}

export function applyTheme() {
  const observer = new MutationObserver(() => {
    const isDarkMode = document.documentElement.style.backgroundColor === "rgb(28, 27, 34)";
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  });
  
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
}

function populateSettingsForm(settings) {
  pomodoroTimeInput.value = settings.pomodoroTime / 60;
  shortBreakTimeInput.value = settings.shortBreakTime / 60;
  longBreakTimeInput.value = settings.longBreakTime / 60;
}

function setAppSettings(settings) {
  pomodoroModeTime.dataset.time = settings.pomodoroTime;
  shortBreakModeTime.dataset.time = settings.shortBreakTime;
  longBreakModeTime.dataset.time = settings.longBreakTime;
}