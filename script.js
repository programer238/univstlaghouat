document.addEventListener("DOMContentLoaded", function() {
    // Get references to the login box and main page elements
    var loginBox = document.getElementById("login-box");
    var mainPage = document.getElementById("main-page");

    // Function to show the main page and hide the login box
    window.showMainPage = function() {
        // Hide the login box
        loginBox.style.display = "none";
        loginBox.transform = "scale(1)";
        loginBox.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out" ;

        // Show the main page
        mainPage.style.opacity = "1";
        mainPage.style.zIndex = "1";

        
    };
});
