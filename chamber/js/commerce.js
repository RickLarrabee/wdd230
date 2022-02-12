const modDate = document.querySelector('#lastMod');
modDate.textContent = `Last Modified: ${document.lastModified}`;

const d = new Date();
let currentYear = d.getFullYear();

document.querySelector('#year').textContent = currentYear;


const hamButton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( d );
dateField.innerHTML = `<em>${fullDate}</em>`;

dayMessage = ''
const weekday = 1;
if (weekday > 0 && weekday < 3) {
   dayMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
console.log(dayMessage)
document.querySelector('.joinUsBanner').innerHTML = dayMessage