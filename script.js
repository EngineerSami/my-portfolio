let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.project');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Loop to the last slide
    } else {
        slideIndex = index;
    }

    // Move the slider by changing the transform property
    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize the slider
showSlide(slideIndex);
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Listen for scroll events
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Loop through each section and check if it's in view
    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Add 'active' class to the appropriate link
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'fade-in' class
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is in the viewport

    // Observe each fade-in element
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
