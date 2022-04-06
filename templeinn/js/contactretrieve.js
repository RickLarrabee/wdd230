let name1_data = localStorage.getItem('guest_name');
let email1_data = localStorage.getItem('email');
let phone1_data = localStorage.getItem('phone');
let name_current = document.querySelector("#name1");
let email_current = document.querySelector("#email1");
let phone_current = document.querySelector("#phone1");

if (name1_data == null) {
    name_current.value = ''
} else {
    name_current.value = name1_data;
    email_current.value = email1_data;
    phone_current.value = phone1_data;
}


function contact_complete () {
    localStorage.removeItem("guest_name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    alert("Thank you for contacting us we will contact you soon.")
}