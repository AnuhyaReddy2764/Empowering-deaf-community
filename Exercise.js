document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("You have been logged out.");
            window.location.href = this.href; // Redirect to logout.php
        });
    }
});

const startBtn = document.querySelector('.btn-quiz');
const popupInfo = document.querySelector('.pop-rules');
const exitBtn = document.querySelector('.btn-exit');  
const All = document.querySelector('.all');  
const continueBtn = document.querySelector('.btn-continue');
const popupTests = document.querySelector('.popup-tests');
const exitTestsBtn = document.querySelector('.btn-exit-tests');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    All.classList.add('active');
};

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    All.classList.remove('active');
};

continueBtn.onclick = () => {
    popupTests.classList.add('active');
    All.classList.add('active');
    popupInfo.classList.add('active-blur');
};

exitTestsBtn.onclick = () => {
    popupTests.classList.remove('active');
    All.classList.remove('active');
    popupInfo.classList.remove('active-blur');
};
