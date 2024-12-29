let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.project');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        slideIndex = 0; 
    } else if (index < 0) {
        slideIndex = totalSlides - 1; 
    } else {
        slideIndex = index;
    }

    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

showSlide(slideIndex);
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
const toggleButton = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

toggleButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'light.css') {
        themeStylesheet.setAttribute('href', 'dark.css');
        toggleButton.innerText = '☀️'; 
    } else {
        themeStylesheet.setAttribute('href', 'light.css'); 
        toggleButton.innerText = '🌙'; 
    }
});