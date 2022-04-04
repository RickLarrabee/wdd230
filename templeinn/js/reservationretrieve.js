let location_data = localStorage.getItem('location');
let check_in_data = localStorage.getItem('checkin');
let check_out_data = localStorage.getItem('checkout');
let location_current = document.querySelector("#location");
let check_in_current = document.querySelector("#checkin");
let check_out_current = document.querySelector("#checkout");

console.log(location_data);
console.log(check_in_data);
console.log(check_out_data);

if (location_data == null) {
    location_current.value = 'dc'
} else {
    location_current.value = location_data;
    check_in_current.value = check_in_data;
    check_out_current.value = check_out_data;
}

function reservation_submit () {
    localStorage.removeItem("location");
    localStorage.removeItem("checkin");
    localStorage.removeItem("checkout");
}