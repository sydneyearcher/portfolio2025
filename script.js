document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const navbar = document.querySelector(".nav");
    const hero = document.querySelector(".hero");
    const hamburger = document.getElementById("hamburger-icon");
    const navLinks = document.getElementById("nav-links");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carousel = document.querySelector(".work-carousel");

    // Toggle the mobile menu
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });
    }

    // Hide navbar on scroll
    if (navbar && hero) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > hero.offsetHeight) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Back-to-Top Button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑";
    backToTopButton.classList.add("back-to-top");
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", function () {
        backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Typewriter Effect
    const heroText = document.querySelector(".hero h1");
    if (heroText) {
        const text = heroText.textContent.trim();
        heroText.textContent = "";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    typeWriter();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(heroText);
    }

    // Parallax Scrolling Effect
    if (hero) {
        window.addEventListener("scroll", () => {
            hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
        });
    }

    // Fade-In Animations on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    document.querySelectorAll(".about, .work, .contact").forEach((section) => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Carousel Navigation
    if (prevButton && nextButton && carousel) {
        let scrollAmount = 0;
        const scrollStep = 300; // Adjust based on carousel size

        nextButton.addEventListener("click", function () {
            scrollAmount += scrollStep;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        });

        prevButton.addEventListener("click", function () {
            scrollAmount -= scrollStep;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        });
    }
});
