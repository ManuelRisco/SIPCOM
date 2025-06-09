document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const loginSuccess = document.getElementById('loginSuccess');

    // Usuarios
    const USERS = [
        { user: 'bambino', pass: 'pollo2025' }
    ];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        loginError.style.display = 'none';
        loginSuccess.style.display = 'none';
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        const found = USERS.find(u => u.user === username && u.pass === password);
        if (found) {
            // Guardar sesión en localStorage
            localStorage.setItem('bambino_admin_logged', 'true');
            loginSuccess.textContent = '¡Acceso correcto! Redirigiendo...';
            loginSuccess.style.display = 'block';
            setTimeout(() => {
                window.location.href = 'admin-panel.html';
            }, 1200);
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
            loginError.style.display = 'block';
        }
    });
});
