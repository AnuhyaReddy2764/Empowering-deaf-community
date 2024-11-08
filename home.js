document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navItems = document.getElementById("nav-items");

    menuIcon.addEventListener("click", () => {
        if (navItems.style.display === "flex" || navItems.style.display === "block") {
            navItems.style.display = "none";
            menuIcon.textContent = "☰";
        } else {
            navItems.style.display = "flex";
            navItems.style.flexDirection = "column";
            menuIcon.textContent = "✖";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("You have been logged out.");
            window.location.href = "logout.php";
        });
    }
});
