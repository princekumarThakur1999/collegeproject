<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


// Toggle between login and register forms
const container = document.getElementById('container');
const toggleBtn = document.getElementById('toggleBtn');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

toggleBtn.addEventListener('click', () => {
    container.classList.toggle('active');
    updateToggleIcon();
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
    updateToggleIcon();
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
    updateToggleIcon();
});

function updateToggleIcon() {
    const icon = toggleBtn.querySelector('i');
    if (container.classList.contains('active')) {
        icon.classList.remove('bx-log-in-circle');
        icon.classList.add('bx-user-plus');
    } else {
        icon.classList.remove('bx-user-plus');
        icon.classList.add('bx-log-in-circle');
    }
}

// Form validation and submission
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login logic here
    console.log('Login attempt with:', username, password);

    // Animation for successful login
    if (username && password) {
        loginForm.querySelector('.btn').textContent = 'Success!';
        loginForm.querySelector('.btn').style.background = '#4BB543';
        setTimeout(() => {
            loginForm.querySelector('.btn').textContent = 'Login';
            loginForm.querySelector('.btn').style.background = '#fff';
        }, 1500);
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Add your registration logic here
    console.log('Registration attempt with:', username, email, password);

    // Animation for successful registration
    if (username && email && password) {
        registerForm.querySelector('.btn').textContent = 'Registered!';
        registerForm.querySelector('.btn').style.background = '#4BB543';
        setTimeout(() => {
            registerForm.querySelector('.btn').textContent = 'Register';
            registerForm.querySelector('.btn').style.background = '#fff';
            container.classList.remove('active');
            updateToggleIcon();
        }, 1500);
    }
});
