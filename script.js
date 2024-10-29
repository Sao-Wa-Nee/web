// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});

// Optional: Slider functionality (if you decide to reintroduce it)
// Uncomment the following code if you add a slider back to your HTML

/*
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);
*/

// Exam
