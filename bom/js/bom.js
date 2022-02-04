const userInput = document.getElementById('favchap');
const list = document.querySelector('.list');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let input = userInput.value;

    let item = document.createElement('li');
    item.innerHTML = `${input}`;
    list.appendChild(item);

    let listButton = document.createElement('button');
    item.appendChild(listButton);
    listButton.textContent = '❌';
    listButton.addEventListener('click', () =>{
        list.removeChild(item);
    })
    userInput.value='';
    userInput.focus();
});

const modDate = document.querySelector('#lastMod');
modDate.textContent = `Last Modified: ${document.lastModified}`;

const d = new Date();
let currentYear = d.getFullYear();

document.querySelector('#year').textContent = currentYear;