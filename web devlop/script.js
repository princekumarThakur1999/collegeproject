
// // The carousel will work automatically with Bootstrap JS loaded
// // No need for manual initialization unless you need custom behavior
// // document.addEventListener('DOMContentLoaded', function () {
// //     // If you need custom behavior, you can access the carousel like this:
// //     const myCarousel = document.getElementById('recruitersCarousel');
// //     const carousel = new bootstrap.Carousel(myCarousel, {
// //         interval: 3000,
// //         ride: 'carousel'
// //     });

// //     // Optional: Add event listeners if needed
// //     myCarousel.addEventListener('slide.bs.carousel', function (event) {
// //         console.log('Sliding from', event.from, 'to', event.to);
// //     });
// // });

// // Optional JavaScript for additional functionality
// document.addEventListener('DOMContentLoaded', function () {
//     const myCarousel = document.getElementById('banners');
//     const carousel = new bootstrap.Carousel(myCarousel);

//     // Pause on hover
//     myCarousel.addEventListener('mouseenter', function () {
//         carousel.pause();
//     });

//     myCarousel.addEventListener('mouseleave', function () {
//         carousel.cycle();
//     });

//     // You can add more custom functionality here
// });


// // Toggle between login and register forms
// const container = document.getElementById('container');
// const toggleBtn = document.getElementById('toggleBtn');
// const showRegister = document.getElementById('showRegister');
// const showLogin = document.getElementById('showLogin');

// toggleBtn.addEventListener('click', () => {
//     container.classList.toggle('active');
//     updateToggleIcon();
// });

// showRegister.addEventListener('click', (e) => {
//     e.preventDefault();
//     container.classList.add('active');
//     updateToggleIcon();
// });

// showLogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     container.classList.remove('active');
//     updateToggleIcon();
// });

// function updateToggleIcon() {
//     const icon = toggleBtn.querySelector('i');
//     if (container.classList.contains('active')) {
//         icon.classList.remove('bx-log-in-circle');
//         icon.classList.add('bx-user-plus');
//     } else {
//         icon.classList.remove('bx-user-plus');
//         icon.classList.add('bx-log-in-circle');
//     }
// }

// // Form validation and submission
// const loginForm = document.getElementById('loginForm');
// const registerForm = document.getElementById('registerForm');

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     // Add your login logic here
//     console.log('Login attempt with:', username, password);

//     // Animation for successful login
//     if (username && password) {
//         loginForm.querySelector('.btn').textContent = 'Success!';
//         loginForm.querySelector('.btn').style.background = '#4BB543';
//         setTimeout(() => {
//             loginForm.querySelector('.btn').textContent = 'Login';
//             loginForm.querySelector('.btn').style.background = '#fff';
//         }, 1500);
//     }
// });

// registerForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const username = document.getElementById('regUsername').value;
//     const email = document.getElementById('regEmail').value;
//     const password = document.getElementById('regPassword').value;
//     const confirmPassword = document.getElementById('regConfirmPassword').value;

//     // Simple validation
//     if (password !== confirmPassword) {
//         alert("Passwords don't match!");
//         return;
//     }

//     // Add your registration logic here
//     console.log('Registration attempt with:', username, email, password);

//     // Animation for successful registration
//     if (username && email && password) {
//         registerForm.querySelector('.btn').textContent = 'Registered!';
//         registerForm.querySelector('.btn').style.background = '#4BB543';
//         setTimeout(() => {
//             registerForm.querySelector('.btn').textContent = 'Register';
//             registerForm.querySelector('.btn').style.background = '#fff';
//             container.classList.remove('active');
//             updateToggleIcon();
//         }, 1500);
//     }
// });
//  login form
document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const container = document.getElementById('container');
    const toggleBtn = document.getElementById('toggleBtn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Toggle between login and register forms
    function toggleForms() {
        container.classList.toggle('active');

        // Change icon based on active form
        const icon = toggleBtn.querySelector('i');
        if (container.classList.contains('active')) {
            icon.classList.remove('bx-log-in-circle');
            icon.classList.add('bx-user-plus');
        } else {
            icon.classList.remove('bx-user-plus');
            icon.classList.add('bx-log-in-circle');
        }
    }

    // Event listeners
    toggleBtn.addEventListener('click', toggleForms);
    showRegister.addEventListener('click', function (e) {
        e.preventDefault();
        if (!container.classList.contains('active')) {
            toggleForms();
        }
    });
    showLogin.addEventListener('click', function (e) {
        e.preventDefault();
        if (container.classList.contains('active')) {
            toggleForms();
        }
    });

    // Form validation and submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Basic validation
        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the data to your server
        console.log('Login submitted:', { username, password });
        alert('Login functionality would connect to your backend system');

        // Reset form
        this.reset();
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            alert('Password should be at least 6 characters');
            return;
        }

        // Here you would typically send the data to your server
        console.log('Registration submitted:', { username, email, password });
        alert('Registration successful! (This would connect to your backend in a real application)');

        // Reset form and switch to login
        this.reset();
        if (container.classList.contains('active')) {
            toggleForms();
        }
    });

    // Create bubbles for background animation
    function createBubbles() {
        const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles';

        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('span');
            bubble.style.setProperty('--i', Math.floor(Math.random() * 10) + 5);
            bubblesContainer.appendChild(bubble);
        }

        document.querySelector('.login-section').appendChild(bubblesContainer);
    }

    createBubbles();
});