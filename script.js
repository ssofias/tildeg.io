document.addEventListener('DOMContentLoaded', () => {

    // --- IMPORTANT: Set the password here ---
    const CORRECT_PASSWORD = 'Iloveyou'; // Change this to the desired password

    // Get all page elements
    const pages = document.querySelectorAll('.page');
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');

    // Get all navigation buttons
    const navButtons = document.querySelectorAll('[data-target]');

    // Function to switch between pages
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
        }
    }

    // Handle the login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        
        // Trim whitespace and compare passwords
        if (passwordInput.value.trim() === CORRECT_PASSWORD) {
            showPage('welcome-page');
        } else {
            alert('Feil kode, prøv igjen ♡'); // "Wrong code, try again ♡"
            passwordInput.value = ''; // Clear the input field
        }
    });

    // Handle all navigation buttons (back, down, up arrows)
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.getAttribute('data-target');
            showPage(targetPageId);
        });
    });

    // Initially, show the login page
    showPage('login-page');
});