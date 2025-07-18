document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
    const login = document.querySelectorAll("#signin-btn");
    const popup = document.getElementById("overlay");
    const close = document.querySelector("#close-popup1");
    const pop = document.getElementById("overlay2");
    login.forEach((btn) => {
        btn.addEventListener("click", function () {
            pop.style.display = "none";
            popup.style.display = "flex";
        });
    });
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();

    const login = document.getElementById("signup-btn");
    const popup = document.getElementById("overlay2");
    const close = document.getElementById("close-popup");
    const pop = document.getElementById("overlay");

    login.addEventListener("click", function () {
        pop.style.display = "none";
        popup.style.display = "flex";
    });
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

// if we use this key word on a element with onclick event, in java script in the function we can directly access properties of that element
// for example if we have a link with onclick="jump(this)" then in the function jump(i) we can access the link using i
// and we can access the properties of that link using i.getAttribute('data-price') or i.value or i.innerHTML etc.
// so we can use this to get the value of the link and redirect to that link
function jump(i) {
    const link = i;
    let val = link.getAttribute("data-price");
    window.location.href = val;
}

let pass = document.querySelector("#Password");
let Icon = document.querySelector("#hideIcon");
let present = true;
Icon.addEventListener("click", () => {
    if (present) {
        Icon.innerHTML = "🤷‍♂️";
        pass.type = "text";
        present = false;
    } else {
        Icon.innerHTML = "🤦‍♂️";
        pass.type = "password";
        present = true;
    }
});

let pass2 = document.querySelector("#Password2");
let Icon2 = document.querySelector("#hideIcon2");
let present2 = true;
Icon2.addEventListener("click", () => {
    if (present2) {
        Icon2.innerHTML = "🤷‍♂️";
        pass2.type = "text";
        present2 = false;
    } else {
        Icon2.innerHTML = "🤦‍♂️";
        pass2.type = "password";
        present2 = true;
    }
});

let cpass = document.getElementById('conPassword');
let Icon3 = document.getElementById('hideConPass')
let present3 = true;
Icon3.addEventListener('click', () =>{
    if(present3){
        Icon3.innerHTML = "🤷‍♂️";
        cpass.type = 'text';
        present3 = false;
    }else{
        Icon3.innerHTML = '🤦‍♂️';
        cpass.type = 'password';
        present3 = true;
    }
})
