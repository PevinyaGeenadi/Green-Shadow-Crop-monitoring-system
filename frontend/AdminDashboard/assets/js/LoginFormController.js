document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");


    // Form validation
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Login form submit event
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Get values from the login form
            const email = document.getElementById('log-in-Username').value;
            const password = document.getElementById('log-in-Password').value;

            // Basic validation
            if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                return;
            }

            if (password.length < 6) {
                showError('password', 'Password must be at least 6 characters');
                return;
            }

            let user = {email: email, password: password};
            user = JSON.stringify(user);

            // ajax call to login endpoint
            $.ajax({
                url: 'http://localhost:8082/cms/api/v1/auth/signin',
                type: 'POST',
                data: user,
                headers: { "Content-Type": "application/json" },
                success: (response) => {
                    document.cookie = "token=" + response.token;
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user', email);
                    window.location.href = 'dashboard.html'; // Redirect to dashboard
                },
                error: (xhr, status, error) => {
                    console.log(xhr.responseText); // Log error message
                }
            });
        });
    }



    // function email validation
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to show validation error
    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.textContent = message;
        inputElement.parentNode.appendChild(errorElement);
    }


































































    // Initial states
    signupForm.classList.add("d-none"); // Hide sign-up form initially
    loginForm.classList.remove("d-none"); // Show login form initially
    signupBtn.classList.add("btn-inactive");
    loginBtn.classList.add("btn-active");

    // Event listener for SIGN UP button
    signupBtn.addEventListener("click", function () {
        signupForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
        signupBtn.classList.add("btn-active");
        signupBtn.classList.remove("btn-inactive");
        loginBtn.classList.add("btn-inactive");
        loginBtn.classList.remove("btn-active");
    });

    // Event listener for LOGIN button
    loginBtn.addEventListener("click", function () {
        loginForm.classList.remove("d-none");
        signupForm.classList.add("d-none");
        loginBtn.classList.add("btn-active");
        loginBtn.classList.remove("btn-inactive");
        signupBtn.classList.add("btn-inactive");
        signupBtn.classList.remove("btn-active");
    });
});

document.getElementById("signupBtn").addEventListener("click", () => alert("Signup clicked!"));
document.getElementById("loginBtn").addEventListener("click", () => alert("Login clicked!"));


document.getElementById("register").addEventListener("click", () => alert("Signup successfully!"));
document.getElementById("loginNow").addEventListener("click", () => alert("Login successfully!"));



