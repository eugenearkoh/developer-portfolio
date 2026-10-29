// =====================================
// EUGENE ARKOH — DEVELOPER PORTFOLIO
// Assignment 3 | Pynexia Technology
// =====================================

// 1. Update the footer year automatically
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. Add interactive behavior to skill cards
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
    card.addEventListener("click", () => {

        // Remove the active state from every card
        skillCards.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        // Highlight the selected card
        card.classList.add("active");
        card.setAttribute("aria-pressed", "true");

        console.log("Selected skill:", card.textContent.trim());
    });
});


// 3. Highlight the navigation link for the current section
const navigationLinks = document.querySelectorAll(".nav-links a");

const pageSections = document.querySelectorAll(
    "main section[id]"
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });

        },
        {
            threshold: 0.35
        }
    );

    pageSections.forEach((section) => {
        sectionObserver.observe(section);
    });
}


// 4. Add a smooth reveal effect to sections
const revealSections = document.querySelectorAll(
    ".hero, .section"
);

if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

    revealSections.forEach((section) => {
        section.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.12
        }
    );

    revealSections.forEach((section) => {
        revealObserver.observe(section);
    });

} else {
    revealSections.forEach((section) => {
        section.classList.add("visible");
    });
}


// 5. Log a confirmation when the portfolio is ready
window.addEventListener("DOMContentLoaded", () => {
    console.log("Eugene Arkoh's portfolio is ready!");
});
