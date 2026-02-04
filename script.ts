// Smooth scrolling for navigation links
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor: HTMLAnchorElement) => {
    anchor.addEventListener('click', function (e: Event): void {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission handler
const form = document.querySelector<HTMLFormElement>('.contact-form');
if (form) {
    form.addEventListener('submit', function (e: Event): void {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Show success message
        alert("Thank you for your message! We'll get back to you soon.");

        // Reset form
        form.reset();
    });
}

// Add scroll effect to header
const header = document.querySelector<HTMLElement>('header');
if (header) {
    window.addEventListener('scroll', (): void => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Intersection Observer for animations
const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll<HTMLElement>('section:not(.hero)').forEach((section: HTMLElement) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
