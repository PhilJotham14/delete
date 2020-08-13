var validateRegistration = () => {
    var firstname = document.mydata.firstname;
    var lastname = document.mydata.lastname;
    var company = document.mydata.company;
    var email = document.mydata.email;
    var area_code = document.mydata.area_code;
    var phone_number = document.mydata.phone_number;
    var address = document.mydata.address;
    var idcharacters = document.mydata.idcharacters;
    var idnum = document.mydata.idnum;
    var idcharacterstwo = document.mydata.idcharacterstwo;
    var employee = document.mydata.employee;
    
    if (firstname.value.length==""){
        firstname.style.border = '5px solid red'
        alert("firstname cannot be left empty")
        return false
    }
    if (firstname.value.length < 5 ||firstname.value.length > 12){
        firstname.style.border = '1px solid green'
        alert("firstname should be between 5 and 12")
        return false
    }
    var letters = /^[a-zA-Z ]*$/;
    if (!firstname.value.match(letters)) {
        firstname.style.border = '1px solid purple'
        alert("First name should not include number")
        return false
    }

    if (lastname.value.length==""){
        lastname.style.border = '1px solid red'
        alert("lastname cannot be left empty")
        return false
    }
    if (lastname.value.length < 5 ||lastname.value.length > 12){
        lastname.style.border = '1px solid green'
        alert("lastname should be between 5 and 12")
        return false
    }

    if (company.value.length==""){
        company.style.border = '5px solid red'
        alert("Company cannot be left empty")
        return false
    }
    if (company.value.length < 5 || company.value.length > 12){
        company.style.border = '5px solid green'
        alert("Company should be between 5 and 20")
        return false
    }

    if (area_code.value.length < 1 || area_code.value.length > 5){
        area_code.style.border = '5px solid green'
        alert("Area code should be between 1 and 5")
        return false
    }
    if (area_code.value.length==""){
        area_code.style.border = '5px solid red'
        alert("Area code cannot be left empty")
        return false
    }
        
    // var area = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!area_code.value.match(area)) {
        area_code.style.border = '5px solid blue'
        alert("Area code should only be integers")
        return false
    }

    if (phone_number.value.length < 1 || area_code.value.length > 10){
        phone_number.style.border = '5px solid green'
        alert("Phone number should be between 1 and 10")
        return false
    }
    if (phone_number.value.length==""){
        phone_number.style.border = '5px solid red'
        alert("Phone number cannot be left empty")
        return false
    }
        
    var areatwo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!num.value.match(areatwo)) {
        num.style.border = '1px solid blue'
        alert("Phone number should only be integers")
        return false
    }

    var id = /^[A-Z ]+$/
    if (firstid.value.match(id)) {
        firstid.style.border = '1px solid blue'
        alert("First 3 ID characters should be in capital letters")
        return false
    }
}