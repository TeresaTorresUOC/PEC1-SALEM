import "@fortawesome/fontawesome-free/css/all.min.css";
(() => {
  const navigationToggle = document.querySelector(".site-nav__toggle");
  const navigationMenu = document.querySelector(".site-nav__menu");

  if (navigationToggle instanceof HTMLButtonElement && navigationMenu instanceof HTMLElement) {
    const toggleMenu = () => {
      const expanded = navigationToggle.getAttribute("aria-expanded") === "true";
      navigationToggle.setAttribute("aria-expanded", String(!expanded));
      navigationMenu.classList.toggle("is-open", !expanded);
    };

    navigationToggle.addEventListener("click", toggleMenu);

    navigationMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navigationToggle.getAttribute("aria-expanded") === "true") {
          toggleMenu();
        }
      });
    });
  }

  const currentYearElement = document.querySelector("[data-current-year]");
  if (currentYearElement) {
    currentYearElement.textContent = String(new Date().getFullYear());
    
  }
})();