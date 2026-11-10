/* ===== RadAware shared helpers ===== */
const RA = {
  KEY_SESSION: "radaware_session",
  KEY_EXAMS: "radaware_exams",
  KEY_THEME: "radaware_theme",

  load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },

  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },

  escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
};

/* ----- Dark / light mode ----- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = theme === "dark" ? "☀ Light mode" : "🌙 Dark mode";
}

function initTheme() {
  let theme = RA.load(RA.KEY_THEME, null);
  if (!theme) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }
  applyTheme(theme);

  const btn = document.getElementById("themeBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      RA.save(RA.KEY_THEME, next);
      applyTheme(next);
    });
  }
}

document.addEventListener("DOMContentLoaded", initTheme);
