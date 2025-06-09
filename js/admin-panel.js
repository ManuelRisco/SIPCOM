// panel de administración

document.addEventListener('DOMContentLoaded', function() {
    // Validar sesión antes de mostrar el panel
    if (localStorage.getItem('bambino_admin_logged') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    //cerrar sesión
    document.querySelectorAll('.admin-option').forEach(function(option) {
        if(option.textContent.includes('Cerrar Sesión')) {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                // Eliminar flag de sesión
                localStorage.removeItem('bambino_admin_logged');
                window.location.href = 'login.html';
            });
        }
    });
});
