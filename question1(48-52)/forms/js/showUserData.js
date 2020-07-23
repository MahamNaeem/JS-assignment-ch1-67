function appendValuesInWebForm() {

    var firstName = sessionStorage.getItem('fName');
    var lastName = sessionStorage.getItem('lName');
    var email = sessionStorage.getItem('email');
    var mobPhone = sessionStorage.getItem('contactNumber');
    var address = sessionStorage.getItem('address');


    document.getElementById("showFirtName").innerHTML = firstName;
    document.getElementById("showLastName").innerHTML = lastName;
    document.getElementById("email").innerHTML = email;
    document.getElementById("mobileNo").innerHTML = mobPhone;
    document.getElementById("address").innerHTML = address;

}

appendValuesInWebForm();