document.addEventListener('DOMContentLoaded', () => {
    // Function to handle click on "Explore Now" button
    const scrollButton = document.getElementById('scrollButton');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            window.location.href = 'catalog.html'; // Redirect to catalog.html
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
