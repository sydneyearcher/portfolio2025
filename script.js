// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
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
const heroText = document.querySelector('.hero h1');
const text = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust speed here (100ms per character)
    }
}

window.addEventListener('load', typeWriter);

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundPositionY = `${window.scrollY * 0.5}px`; // Adjust the multiplier for effect strength
});