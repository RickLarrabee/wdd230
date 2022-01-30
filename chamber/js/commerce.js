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