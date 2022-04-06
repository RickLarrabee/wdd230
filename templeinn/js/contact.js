function contact_us () {    
    const name_entered = document.querySelector("#name");
    const email_entered = document.querySelector("#email");
    const phone_entered = document.querySelector("#phone");
    const submit_button = document.querySelector("#submit");
    let name_data = '';
    let email_data = '';
    let phone_data = '';

    name_data = name_entered.value;
    email_data = email_entered.value;
    phone_data = phone_entered.value;

    console.log(name_data)

    localStorage.setItem("guest_name", name_data);
    localStorage.setItem("email", email_data);
    localStorage.setItem("phone", phone_data);
};