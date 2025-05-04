let lastX = 0;
let lastY = 0;
let lastTime = Date.now();
let hoverScale = 1; // default, will become 1.5 on hover

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    const now = Date.now();
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const dt = now - lastTime || 16;

    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
    const speedScale = Math.min(1 + speed * 0.8, 1.5); // adjust sensitivity

    // Combine both: base it off the hover scale
    const finalScale = hoverScale * speedScale;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.transform = `scale(${finalScale})`;

    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;
});

// Handle hover scaling
document.querySelectorAll('a, button, .project-item, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverScale = 1.5; // scale up when hovering
    });

    element.addEventListener('mouseleave', () => {
        hoverScale = 1; // reset when not hovering
    });
});



// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section > *').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});