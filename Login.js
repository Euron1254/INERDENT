document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Authentication logic
        if (email === 'jonuzelezi@gmail.com' && password === 'Interdent1@') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'opsion.html';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Check if the user is already logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'opsion.html';
    }
});
