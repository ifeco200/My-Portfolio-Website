/* =========================================================
   IFECO PORTFOLIO — MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------
  // MOBILE NAVIGATION
  // ------------------------------
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a navigation link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu with Escape key
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ------------------------------
  // SMOOTH SCROLLING
  // ------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ------------------------------
  // SCROLL REVEAL ANIMATIONS
  // ------------------------------
  const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("revealed");
    });
  }

  // ------------------------------
  // PROJECT CARD INTERACTIONS
  // ------------------------------
  document.querySelectorAll(".project-card").forEach(card => {
    const projectLink = card.querySelector(".project-link");

    if (projectLink) {
      card.addEventListener("click", event => {
        // Don't interfere with clicks on buttons or links
        if (event.target.closest("a, button")) return;

        projectLink.click();
      });
    }
  });

  // ------------------------------
  // CURRENT YEAR
  // ------------------------------
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});