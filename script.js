document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.nav');
    const hero = document.querySelector('.hero');
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        // Adjust the navbar behavior for desktop and mobile
        if (window.scrollY > hero.offsetHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Back-to-Top Button
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
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h1');
    if (!heroText) return; // Prevent errors if element is missing

    const text = heroText.textContent.trim(); // Trim whitespace for better consistency
    heroText.textContent = ''; // Clear the existing text
    let i = 0;

    // Ensure the typewriter effect works on both desktop and mobile
    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // You can adjust the speed here
        }
    }

    // Run the typewriter effect after the text is visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.disconnect(); // Stop observing after starting the effect
            }
        });
    }, { threshold: 0.5 }); // Start when 50% of the element is in view

    observer.observe(heroText);
});



// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`; // Adjust the multiplier for effect strength
});


// Check if the document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.nav');
    const hero = document.querySelector('.hero');
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        if (window.scrollY > hero.offsetHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


