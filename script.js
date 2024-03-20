// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typed.js initialization for typing animation
var typed = new Typed('.title', {
    strings: ["Amrutha Patil"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
