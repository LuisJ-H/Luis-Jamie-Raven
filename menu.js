function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var menu= document.getElementById("menu")
    var order= document.getElementById("order")
    var header= document.getElementById("header")

    loginForm.style.display = "block";
    signupForm.style.display = "none";
    menu.style.display= "none";
    order.style.display= "none";
    header.style.display= "none";
}
