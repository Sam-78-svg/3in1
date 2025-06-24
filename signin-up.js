function openPP() {
    const login = document.getElementById("signin-btn");
    const popup = document.getElementById("overlay");
    const close = document.getElementById("close-popup");
    login.addEventListener('click', function(){
        popup.style.display = 'flex';
    });
    close.addEventListener('click', function(){
        popup.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function( e) {
    e.preventDefault();
    const login = document.getElementById("signin-btn");
    const popup = document.getElementById("overlay");
    const close = document.getElementById("close-popup");
    login.addEventListener('click', function(){
        popup.style.display = 'flex';
    });
    close.addEventListener('click', function(){
        popup.style.display = 'none';
    });
    
});