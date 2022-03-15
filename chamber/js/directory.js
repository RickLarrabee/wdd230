const requestURL = 'https://ricklarrabee.github.io/wdd230/chamber/data/data.json';

function companyCards () {
    document.querySelector(".cards").innerHTML = '';
    document.querySelector(".list").innerHTML = '';
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
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let p = document.createElement('p');
    
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = company.business;
        p.innerHTML = `${company.address} <br/> ${company.phone} <br/> <a href=${company.website} target="_blank">${company.displayurl}</a>`;
    
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', 'logo of ' + company.business);
        portrait.setAttribute('loading', 'lazy');
    
        // Add/append the section(card) with the h2 element
        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(p);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card)
    }
}

function companyList () {
    document.querySelector(".list").innerHTML = '';
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
        const lists = document.querySelector(".list");
        let list = document.createElement('tr');
        let companyName = document.createElement('td');
        let address = document.createElement('td');
        let phone = document.createElement('td');
        let website = document.createElement('td');
    
        // Change the textContent property of the h2 element to contain the prophet's full name
        companyName.textContent = company.business;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.innerHTML = `<a href=${company.website} target="_blank">${company.displayurl}</a>`;
    
        // Add/append the section(card) with the h2 element
        list.appendChild(companyName);
        list.appendChild(address);
        list.appendChild(phone);
        list.appendChild(website);

        // Add/append the existing HTML div with the cards class with the section(card)
        lists.appendChild(list)
    }
}
