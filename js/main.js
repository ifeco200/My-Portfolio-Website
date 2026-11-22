(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#nav-menu");
  const year = document.querySelector("#year");

  // Automatically update the copyright year.
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!menuButton || !menu) return;

  // Close the mobile navigation.
  const closeMenu = () => {
    menu.classList.remove("is-open");
    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("menu-open");
  };

  // Open the mobile navigation.
  const openMenu = () => {
    menu.classList.add("is-open");
    menuButton.classList.add("active");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");

    document.body.classList.add("menu-open");
  };

  // Toggle the hamburger menu.
  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu after clicking a navigation link.
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu with the Escape key.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close the mobile menu when returning to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
})();