// form.js
emailjs.init("TYqSEsLdvSC6o5cLx"); // Replace with your user ID

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    emailjs.sendForm("TYqSEsLdvSC6o5cLx", "template_lbat58u", form) // Replace with your service and template IDs
        .then(function (response) {
            alert("Message sent successfully!");
        }, function (error) {
            alert("Failed to send message.");
        });
});
