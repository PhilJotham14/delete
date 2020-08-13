var validatesignin = () => {
    var username = document.mydata.username;
    var password = document.mydata.password;

    if (username.value.length==""){
        username.style.border = '5px solid red'
        alert("Email cannot be left empty")
        return false
    }

    if (password.value.length==""){
        password.style.border = '5px solid red'
        alert("Password cannot be left empty")
        return false
    }

    var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (username.value.match(letters)) {
    //     username.style.border = '5px solid red'
        
    // }
    // else {
    //         alert("Invalid email")
    //         return false
    // }
}
