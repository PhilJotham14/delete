document.getElementById("signi").addEventListener("submit", e => {
    e.preventDefault();


var validatesignin = () => {
    var email = document.mydata.email;
    var password = document.mydata.password;

    if (password.value.length==""){
        password.style.border = '5px solid green'
        alert("Password cannot be left empty")
    }

    var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(letters)) {
        email.style.border = '5px solid green'
    }
    else {
            alert("Invalid email")
    }
}
validatesignin();
});