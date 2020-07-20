document.getElementById("signu").addEventListener("submit", e => {
    e.preventDefault();

var validatesignup = () => {
    var email = document.mydata.email;
    var password = document.mydata.password;
    

    if (email.value.length==""){
        email.style.border = '5px solid red'
        alert("Email cannot be left empty")
    }
    if (password.value.length==""){
        password.style.border = '5px solid green'
        alert("Password cannot be left empty")
    }

    var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (email.value.match(letters)) {
    //     email.style.border = '5px solid green'
    //     alert("email is missing @")
    // }
}
validatesignup();
});