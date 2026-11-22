// =====================================
// CLICKABLE PROJECT CARDS
// =====================================

const projectLinks = [
    "https://ifeco200.github.io/Digital-Banking-Landing-page/",
    "https://ifeco200.github.io/sunnyside-landing-page/",
    "https://ifeco200.github.io/random-password-generator/",
    "https://ifeco200.github.io/E-commernce-page/",
    "https://ifeco200.github.io/blogr-landing-page/",
    "https://ifeco200.github.io/Bento-landing-page/"
];   

document.querySelectorAll(".project-card").forEach((card, index) => {
    card.addEventListener("click", (event) => {
        if (event.target.closest("a")) return;

         window.open(projectLinks[index], "_blank", "noopener,noreferrer");
    });
});