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
