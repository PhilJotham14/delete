var validatepurchase = () => {
    var customername = document.mydata.customername;
    var phonenumber = document.mydata.phonenumber;
    var email = document.mydata.email;
    var initialpay = document.mydata.initialpay;
    var itemname = document.mydata.itemname;
    var serialnumber = document.mydata.serialnumber;
    var refereenum = document.mydata.refereenum;

    var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    var cus =  /^[a-zA-Z ]*$/;
    if (!customername.value.match(cus)) {
        customername.style.border = '1px solid blue'
        alert("Customer name should not be in numbers")
        return false
    }

    // if (phonenumber.value.length < 10 || phonenumber.value.length > 10){
    //     phonenumber.style.border = '1px solid green'
    //     alert("Area code should be between 1 and 5")
    //     return false
    // }
}