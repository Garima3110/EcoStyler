const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    formTitle.textContent = 'Sign Up';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    formTitle.textContent = 'Login';
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailOrUsername = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailOrUsername, password })
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
        alert('Login successful');
        window.location.href = '/homepage.html';
    } else {
        alert('Login failed: ' + data.message);
    }
});

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const age = 25; // Example age, you can add this input to the form
    const bio = "This is a bio"; // Example bio, you can add this input to the form

    const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailId: email, username, password, age, bio })
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
        alert('Signup successful');
    } else {
        alert('Signup failed: ' + data.message);
    }
});