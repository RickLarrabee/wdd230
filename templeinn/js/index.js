const location_selected = document.querySelector("#location");
const check_in_selected = document.querySelector("#checkin");
const check_out_selected = document.querySelector("#checkout");
const submit_button = document.querySelector("#reservationsubmit");
let location_data = location_selected.options[location_selected.selectedIndex].value;
let check_in_data = '';
let check_out_data = '';

location_selected.addEventListener('change',(e)=> {
    location_data = '';
    location_data = location_selected.options[location_selected.selectedIndex].value;
});

check_in_selected.addEventListener('change',(e)=> {
    check_in_data = '';
    check_in_data = check_in_selected.value;
});

check_out_selected.addEventListener('change',(e)=> {
    check_out_data = '';
    check_out_data = check_out_selected.value;
});

function reservation_submit () {
    localStorage.setItem("location", location_data);
    localStorage.setItem("checkin", check_in_data);
    localStorage.setItem("checkout", check_out_data);
};