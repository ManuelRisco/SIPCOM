// js/menu-scroll.js
// Función de scroll suave con offset
function scrollConOffset(elemento, offset = 80) {
    // Usa un offset mayor para subir más (por ejemplo, 120)
    const y = elemento.getBoundingClientRect().top + window.pageYOffset - (offset + 40);
    window.scrollTo({ top: y, behavior: 'smooth' });
}

// Scroll suave para enlaces del navbar y footer
if (document.querySelectorAll('.footer-link-menu, .footer-link-promociones, .footer-link-nosotros').length) {
    document.querySelectorAll('.footer-link-menu, .footer-link-promociones, .footer-link-nosotros').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var tab = link.dataset.tab;
            // Si es Carta, activa Pollo a la Brasa
            if (link.classList.contains('footer-link-menu')) {
                var tabs = document.querySelectorAll('.hm-tab-link');
                tabs.forEach(function(t) {
                    if (t.textContent.trim() === 'Pollo a la Brasa') {
                        t.click();
                    }
                });
            }
            // Si es Promociones, activa la pestaña Promociones
            if (tab) {
                var tabs = document.querySelectorAll('.hm-tab-link');
                tabs.forEach(function(t) {
                    if (t.textContent.trim() === tab) {
                        t.click();
                    }
                });
            }
            // Si es Nosotros, solo hace scroll
            var href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                var target = document.querySelector(href);
                if (target) {
                    scrollConOffset(target);
                }
            }
        });
    });
}

// Scroll suave y cambio de pestaña para el menú móvil
if (document.querySelectorAll('.header-menu-movil a').length) {
    document.querySelectorAll('.header-menu-movil a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var text = link.textContent.trim();
            var cerrarMenu = function() {
                document.querySelector('.header-menu-movil').classList.remove('active');
            };
            var offsetMovil = 80;
            if (text === 'Carta') {
                e.preventDefault();
                cerrarMenu();
                var tabs = document.querySelectorAll('.hm-tab-link');
                tabs.forEach(function(t) {
                    if (t.textContent.trim() === 'Pollo a la Brasa') {
                        t.click();
                    }
                });
                var target = document.querySelector('#carta');
                if (target) {
                    scrollConOffset(target, offsetMovil);
                }
            } else if (text === 'Promociones') {
                e.preventDefault();
                cerrarMenu();
                var tabs = document.querySelectorAll('.hm-tab-link');
                tabs.forEach(function(t) {
                    if (t.textContent.trim() === 'Promociones') {
                        t.click();
                    }
                });
                var target = document.querySelector('#carta');
                if (target) {
                    scrollConOffset(target, offsetMovil);
                }
            } else if (text === 'Nosotros') {
                e.preventDefault();
                cerrarMenu();
                var target = document.querySelector('#sobre-nosotros');
                if (target) {
                    scrollConOffset(target, offsetMovil);
                }
            } else if (text === 'Contacto') {
                e.preventDefault();
                cerrarMenu();
                window.location.href = 'https://wa.me/51929844681';
            } else if (text === 'Acceso' || text === 'Acesso') {
                e.preventDefault();
                cerrarMenu();
                window.location.href = 'login.html';
            }
        });
    });
}
