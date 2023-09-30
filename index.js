// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Name is required.');
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Email is required.');
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Message is required.');
    }

    if (!isValid) {
        e.preventDefault();
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
