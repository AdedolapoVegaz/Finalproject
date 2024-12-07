// Created By: Jovan Leamy | n01724731
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    errorMessage.textContent = "";

    
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    }

    
    if (username === "member" && password === "password123") {
        alert("Login successful!");
        return true; 
    } else {
        errorMessage.textContent = "Invalid username or password!";
        return false; 
    }
}
