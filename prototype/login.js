// Login page script
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'admin' && password === '123') {
            // Save username to localStorage
            localStorage.setItem('username', username);
            // Clear any previous onboarding data
            localStorage.removeItem('studyGoal');
            localStorage.removeItem('aiStyle');
            loginError.textContent = '';
            // Redirect to question page
            window.location.href = 'question.html';
        } else {
            loginError.textContent = 'Invalid credentials! Try admin/123 😅';
        }
    });
});
