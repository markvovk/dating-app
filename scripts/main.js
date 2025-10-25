document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggles = document.querySelectorAll(".accordion__toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggles.forEach((btn) => {
        if (btn !== toggle) {
          btn.setAttribute("aria-expanded", "false");
          const content = btn.nextElementSibling;
          if (content) {
            content.classList.remove("is-visible");
          }
        }
      });

      toggle.setAttribute("aria-expanded", String(!expanded));
      const content = toggle.nextElementSibling;
      if (content) {
        content.classList.toggle("is-visible", !expanded);
      }
    });
  });
});
