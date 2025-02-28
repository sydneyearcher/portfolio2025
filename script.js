document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const navbar = document.querySelector('.nav');
    const hero = document.querySelector('.hero');
    const hamburger = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');
    
    // Toggle the mobile menu
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });

    // Hide navbar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > hero.offsetHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

 // Carousel Navigation
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.work-carousel');
let currentIndex = 0;
const items = document.querySelectorAll('.work-item');
const totalItems = items.length;

// Set initial position
carousel.style.transform = `translateX(0%)`;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Go to the previous item
prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Loop to the last item
    }
    updateCarousel();
});

// Go to the next item
nextButton.addEventListener('click', function () {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first item
    }
    updateCarousel();
});


    // Back-to-Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top'); // Add the CSS class
    document.body.appendChild(backToTopButton); // Add the button to the DOM

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Make it visible
        } else {
            backToTopButton.style.display = 'none'; // Hide it
        }
    });

    // Smooth scrolling to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Fade-In Animations on Scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.about, .work, .contact').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Typewriter Effect for Hero Section
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        const text = heroText.textContent.trim(); // Trim whitespace for better consistency
        heroText.textContent = ''; // Clear the existing text
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Adjust speed here
            }
        }

        // Start the typewriter effect when 50% of the text is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.disconnect(); // Stop observing after starting the effect
                }
            });
        }, { threshold: 0.5 });

        observer.observe(heroText);
    }

    // Parallax Scrolling Effect
    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero');
        heroSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`; // Adjust effect strength
    });
});
