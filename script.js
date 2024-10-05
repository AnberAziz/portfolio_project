// JavaScript for smooth scrolling, sticky navbar, and additional functionalities

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav__links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navigation bar
    const navbar = document.getElementById('navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };

    // Toggle dark mode (if supported)
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function applyDarkMode(e) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
    
    darkModeMediaQuery.addListener(applyDarkMode);
    applyDarkMode(darkModeMediaQuery);

    // Optional: Button to switch between light/dark mode
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = 'Toggle Dark Mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

});
