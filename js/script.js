// ==========================================
// JOSIAH MOORE - PERSONAL WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initWelcomeMessage();
    initFAQAccordion();
    initCharacterCounter();
    initBackToTopButton();
});

// ------------------------------------------
// Feature 1: Dark / Light Mode Toggle
// ------------------------------------------
function initThemeToggle() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "dark";
    
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        if (themeToggleButton) themeToggleButton.textContent = "🌙 Dark Mode";
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            
            let currentTheme = "dark";
            if (document.body.classList.contains("light-mode")) {
                currentTheme = "light";
                themeToggleButton.textContent = "🌙 Dark Mode";
            } else {
                themeToggleButton.textContent = "☀️ Light Mode";
            }
            
            localStorage.setItem("theme", currentTheme);
        });
    }
}

// ------------------------------------------
// Feature 2: Dynamic Time-Based Welcome Message
// ------------------------------------------
function initWelcomeMessage() {
    const welcomeContainer = document.getElementById("welcome-message");

    if (welcomeContainer) {
        const currentHour = new Date().getHours();
        let greeting = "Welcome";

        if (currentHour < 12) {
            greeting = "Good Morning! Welcome";
        } else if (currentHour < 18) {
            greeting = "Good Afternoon! Welcome";
        } else {
            greeting = "Good Evening! Welcome";
        }

        welcomeContainer.textContent = `${greeting} to my personal website.`;
    }
}

// ------------------------------------------
// Feature 3: Interactive FAQ Accordion (DOM Manipulation)
// ------------------------------------------
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            question.classList.toggle("active");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

// ------------------------------------------
// Feature 4: Real-Time Character Counter
// ------------------------------------------
function initCharacterCounter() {
    const messageInput = document.getElementById("message");
    const charCounter = document.getElementById("char-counter");
    const maxLength = 250;

    if (messageInput && charCounter) {
        messageInput.addEventListener("input", (e) => {
            const currentLength = e.target.value.length;
            const remaining = maxLength - currentLength;
            
            charCounter.textContent = `${remaining} characters remaining`;

            if (remaining < 25) {
                charCounter.style.color = "#f87171";
            } else {
                charCounter.style.color = "#a7f3d0";
            }
        });
    }
}

// ------------------------------------------
// Feature 5: Back-to-Top Floating Button
// ------------------------------------------
function initBackToTopButton() {
    const backToTopBtn = document.getElementById("back-to-top-btn");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}
