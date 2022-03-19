const requestURL = 'https://ricklarrabee.github.io/wdd230/chamber/data/data.json';

function companyCards () {
    document.querySelector(".cards").innerHTML = '';
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject['companies'];  
        companies.forEach(displayCompanies);
    });

    function displayCompanies(company) {
        // Create elements to add to the document
        const cards = document.querySelector(".cards");
        let card = document.createElement('section');
        let p1 = document.createElement('p');
        let portrait = document.createElement('img');
        let p2 = document.createElement('p');
        let level = company.memberlevel;
    
        if (level === "gold" || "silver") {
            // Change the textContent property of the h2 element to contain the prophet's full name
            p1.textContent = company.business;
            p2.innerHTML = `${company.phone} <br/> <a href=${company.website} target="_blank">${company.displayurl}</a>`;
    
            // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            portrait.setAttribute('src', company.imageurl);
            portrait.setAttribute('alt', 'logo of ' + company.business);
            portrait.setAttribute('loading', 'lazy');
    
            // Add/append the section(card) with the h2 element
            card.appendChild(portrait);
            card.appendChild(p1);
            card.appendChild(p2);

            // Add/append the existing HTML div with the cards class with the section(card)
            cards.appendChild(card)
        }
    }
}