const carousel = document.querySelector('.work-carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

const scrollAmount = 300; // Adjust based on your design

nextButton.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});



function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_5nylj46", "template_lbat58u", parms)
        .then(() => {
            alert("Email Sent!");
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send email. Check console for details.");
        });
}
