function handleRegister() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    
    if (localStorage.getItem(email)) {
        alert("An account with this email already exists.");
        return false;
    }

    
    const user = { email: email, password: password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    return true;
}

function handleLogin() {
    const email = document.getElementById("login-email").value;
    const name = document.getElementById("login-name").value;
    const phone = document.getElementById("login-phone").value;

    if (email && name && phone) {
        sessionStorage.setItem("loggedInUser", email);
        sessionStorage.setItem("userName", name);
        sessionStorage.setItem("userPhone", phone);
        alert("Login successful!");
        window.location.href = "profile.html";
        return false;
    } else {
        alert("Please fill in all fields.");
        return false;
    }
    console.log({ email, name, phone });

}
    




