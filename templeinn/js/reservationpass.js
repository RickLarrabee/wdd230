let location = document.querySelector("location");
let checkin = document.querySelector("checkin");
let checkout = document.querySelector("checkout");
let reservationinfo = [location, checkin, checkout];

localStorage.setItem('objectToPass', reservationinfo); 