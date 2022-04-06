let location_data = localStorage.getItem('location');
let check_in_data = localStorage.getItem('checkin');
let check_out_data = localStorage.getItem('checkout');
let location_current = document.querySelector("#location");
let check_in_current = document.querySelector("#checkin");
let check_out_current = document.querySelector("#checkout");

if (location_data == null) {
    location_current.value = 'dc'
} else {
    location_current.value = location_data;
    check_in_current.value = check_in_data;
    check_out_current.value = check_out_data;
}

function reservation_complete () {
    localStorage.removeItem("location");
    localStorage.removeItem("checkin");
    localStorage.removeItem("checkout");
    alert("Thank you for reserving a room with us.")
}
