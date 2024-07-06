document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('successMessage');
    const closeSuccessMessage = document.getElementById('closeSuccessMessage');

    const validUsers = {
        'aerick': '1234',
        'cbrayan': '1234',
        'cmanuel': '1234',
        'mmoises': '1234'
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (validUsers[username] && validUsers[username] === password) {
            alert('Inicio de sesión exitoso');
            window.location.href = 'vistacli.html';  // Redirigir a la página vistacli.html
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        emailInput.value = '';  // Limpiar el campo de correo electrónico
        successMessage.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        forgotPasswordModal.show();
    });

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        forgotPasswordForm.style.display = 'none';
        successMessage.style.display = 'block';
    });

    closeSuccessMessage.addEventListener('click', function() {
        forgotPasswordModal.hide();
    });

    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: {
                type: 'polygon',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 6 },
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 10,
                random: true,
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: { opacity: 1 },
                },
                push: { particles_nb: 4 },
            },
        },
        retina_detect: true,
    });
});
