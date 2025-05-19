// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Typing animation for title
const titleText = "Frontend Developer";
const titleElement = document.getElementById("typing-title");
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.textContent = titleText.substring(0, titleIndex + 1);
        titleIndex++;
        setTimeout(typeTitle, 100);
    }
}

const descriptionText = "As a passionate developer with a strong foundation in web technologies, I am committed to creating seamless, user-centered designs that enhance user experience. My skills include HTML, CSS, JavaScript, and various front-end frameworks, which I use to build responsive and interactive web applications. I am always eager to learn new technologies and tools to improve my craft and stay up-to-date with industry trends. With an eye for detail and a focus on performance, I strive to deliver high-quality websites that are both functional and visually appealing.";

const descriptionElement = document.getElementById("typing-description");
descriptionElement.textContent = descriptionText;
descriptionElement.classList.add("fade-in");


// Start typing animations
setTimeout(() => {
    typeTitle();
    setTimeout(typeDescription, titleText.length * 100 + 500);
}, 500);

// Text animation on scroll
const fadeElements = document.querySelectorAll('.fade-in-up');

function fadeInOnScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

fadeInOnScroll(); // Initial check
window.addEventListener('scroll', fadeInOnScroll); // On scroll

// Project card hover effect enhancement (3D hover tilt)
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;

        const centerX = this.offsetWidth / 2;
        const centerY = this.offsetHeight / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        this.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
    });
});

// Project video playback on hover
projectCards.forEach(card => {
    const video = card.querySelector('.project-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Rewind to start
    });
});
