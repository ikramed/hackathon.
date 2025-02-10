function togglePassword() {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";

    let toggleIcon = document.querySelector(".toggle-password");
    toggleIcon.style.color = "yellow";
    setTimeout(() => toggleIcon.style.color = "cyan", 300);
}

function loginEffect() {
    let loginButton = document.querySelector(".glow-button");
    
    loginButton.innerText = "Logging in...";
    loginButton.style.boxShadow = "0 0 20px lime";
    
    setTimeout(() => {
        loginButton.innerText = "Success!";
        loginButton.style.boxShadow = "0 0 25px green";
    }, 1000);
}


const loginBox = document.getElementById("loginBox");
document.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;  // 
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10; // 
    loginBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.1)`; // 
});


document.addEventListener("mouseleave", () => {
    loginBox.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
});


