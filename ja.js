document.addEventListener("DOMContentLoaded", () => {
    const email = sessionStorage.getItem("loggedInUser");
    const name = sessionStorage.getItem("userName");
    const phone = sessionStorage.getItem("userPhone");

    if (email && name && phone) {
        document.getElementById("profile-email").value = email;
        document.getElementById("profile-name").value = name;
        document.getElementById("profile-phone").value = phone;
        document.getElementById("user-name").textContent = name;
    } else {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
});

function logout() {
    sessionStorage.clear(); 
    alert("You have been logged out.");
    window.location.href = "login.html"; 
}

