
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// CURRENT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const recipient = "mae33656@gmail.com";

        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message;

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;
    });
}
