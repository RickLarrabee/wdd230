const userInput = document.getElementById('favchap');
const list = document.querySelector('.list');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let input = userInput.value;

    if (input === '') {
        alert('Enter a favorite Chapter')
    }
    else {
    let item = document.createElement('li');
    item.innerHTML = `${input}`;
    list.appendChild(item);

    const deleteButton = document.createElement('button');
    item.appendChild(deleteButton);
    deleteButton.innerText = '❌';
    deleteButton.addEventListener('click', event =>list.removeChild(item))
    userInput.value='';
    userInput.focus();
    }
});

const modDate = document.querySelector('#lastMod');
modDate.textContent = `Last Modified: ${document.lastModified}`;

const d = new Date();
let currentYear = d.getFullYear();

document.querySelector('#year').textContent = currentYear;