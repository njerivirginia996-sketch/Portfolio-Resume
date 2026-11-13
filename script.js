// =========================
// PORTFOLIO JAVASCRIPT
// =========================


// 1. Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// 2. Typing effect
const text = "Junior Web Developer";
const typingElement = document.querySelector(".hero-content h2");

let index = 0;

function typeText() {
    if (typingElement && index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 100);
    }
}

// Clear the original text before starting
if (typingElement) {
    typingElement.textContent = "";
    typeText();
}


// 3. Contact form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been received.");

        contactForm.reset();
    });
}


// 4. Highlight navigation link while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


// 5. Welcome message in the console
console.log("Welcome to Virginia Njeri's Portfolio!");
console.log("Portfolio website loaded successfully.");