// Dark mode toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const yOffset = -100; // Adjust the offset as needed

    window.scrollTo({
      top: targetElement.offsetTop + yOffset,
      behavior: 'smooth',
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    // ... (previous JavaScript code) ...

    // Typewriter effect
    const typewriter = document.getElementById('typewriter');
    const phrases = ["I am a web developer", "I am a web designer", "I am a programmer", "I am a UI developer", "I am UX developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const typingSpeed = 100; // Adjust the typing speed as needed

        if (!isDeleting && charIndex <= currentPhrase.length) {
            typewriter.textContent = currentPhrase.substring(0, charIndex);
            charIndex++;
        }

        if (isDeleting && charIndex >= 0) {
            typewriter.textContent = currentPhrase.substring(0, charIndex);
            charIndex--;
        }

        if (charIndex > currentPhrase.length) {
            isDeleting = true;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        setTimeout(type, charIndex > 0 ? typingSpeed : 1000);
    }

    type();
});


document.addEventListener("DOMContentLoaded", function () {
    // ... (previous JavaScript code) ...

    // Typewriter effect
    // ... (previous typewriter code) ...

    // Handle form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // You can send this data to a server for processing or use a service like Formspree to handle the email submission
        // Example using Formspree:
        const formAction = 'https://formspree.io/your-email@example.com'; // Replace with your Formspree endpoint
        fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Email sent successfully.');
                // Clear the form
                contactForm.reset();
            } else {
                alert('An error occurred. Please try again later.');
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again later.');
        });
    });

    const htmlMeter = document.getElementById('html-meter');
    const cssMeter = document.getElementById('css-meter');
    const jsMeter = document.getElementById('js-meter');
    
    const htmlPercentage = document.getElementById('html-percentage');
    const cssPercentage = document.getElementById('css-percentage');
    const jsPercentage = document.getElementById('js-percentage');
    
    const knowledgeLevels = {
        HTML: 80,
        CSS: 70,
        JavaScript: 30,
    };
    
    const increment = 1; // Adjust the increment rate as needed
    const interval = 50; // Adjust the interval delay as needed
    
    function animateMeterAndPercentage(meter, percentageElement, endValue) {
        let value = 0;
        const animation = setInterval(() => {
            if (value < endValue) {
                value += increment;
                meter.value = value;
                percentageElement.textContent = value + "%";
            } else {
                clearInterval(animation);
            }
        }, interval);
    }
    
    animateMeterAndPercentage(htmlMeter, htmlPercentage, knowledgeLevels.HTML);
    animateMeterAndPercentage(cssMeter, cssPercentage, knowledgeLevels.CSS);
    animateMeterAndPercentage(jsMeter, jsPercentage, knowledgeLevels.JavaScript);

});
