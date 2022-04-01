const requestURL = 'https://ricklarrabee.github.io/wdd230/templeinn/data/data2.json';

function companyCards () {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);  
    });
    function displayTemples(temple) {
        // Create elements to add to the document
        const cards = document.querySelector(".cards");
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
            
        // Change the textContent property of the h2 element to contain the companies's full name
        h2.textContent = temple.name;
        p.innerHTML = `${temple.address} <br/> ${temple.phone}`;
    
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(p);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
    }
}