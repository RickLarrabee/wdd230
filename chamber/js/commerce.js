const modDate = document.querySelector('#lastMod');
modDate.textContent = `Last Modified: ${document.lastModified}`;

const d = new Date();
let currentYear = d.getFullYear();

document.querySelector('#year').textContent = currentYear;

// construct the hamburger button for medium and small view ports

const hamButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// determine the day and show a banner on certain days of the week.

const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( d );
dateField.innerHTML = `<em>${fullDate}</em>`;

dayMessage = ''
const weekday = d.getDay();
if (weekday > 0 && weekday < 3) {
   dayMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
   document.querySelector('.joinUsBanner').innerHTML = dayMessage
}


// calculate the time in days since the users last visit to the site
let currentVisit = new Date("03/22/2022");
let lastVisit = window.localStorage.getItem("visitDate");
lastVisit = new Date(lastVisit);
const visitDate = document.querySelector("#lastVisit");
const oneDay = (1000*60*60*24);

let timeDifference = currentVisit.getTime() - lastVisit.getTime();
let dateDifference = Math.round(timeDifference /(1000*60*60*24))
if (dateDifference <= 0){
   visitDate.textContent = `It has been less than 1 day since you visited our site.`
} else {   
   visitDate.textContent = `It has been ${dateDifference} days since your last visit. Welcome Back`
};
window.localStorage.setItem("visitDate", currentVisit);