const requestURL = 'https://ricklarrabee.github.io/wdd230/chamber/data/data.json';
const companyList1 = []
const spotlightCompanies = []
const spotlightCompanies2 = []

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(newCompanyList);
    
    function newCompanyList(company) {
        let memberLevel = company.memberlevel;
        console.log(memberLevel);
        if (memberLevel == "gold" || memberLevel == "silver") {
            companyList1.push(company);
        }
    }
    let spotlight1 = randomCompanies(companyList1);
    spotlightCompanies.push(spotlight1);
    while (spotlightCompanies.length < 3) {
        let spotlight2 = randomCompanies(companyList1);
        let spotlight3 = randomCompanies(companyList1);
        if (spotlight1 != spotlight2 && spotlight1 != spotlight3 && spotlight2 != spotlight3){
            spotlightCompanies.push(spotlight2);
            spotlightCompanies.push(spotlight3);
        }     
    }

    function randomCompanies(companyList1) {
        return companyList1[Math.floor(Math.random()*companyList1.length)];
    }

    console.table(companyList1);
    console.table(spotlightCompanies);
    let itemNumber = 1
    spotlightCompanies.forEach(displayCompanies);
    function displayCompanies (company) {
        const spotlights = document.querySelector(".spotLights");
        let spotlight = document.createElement('section');
        spotlight.className = `spotlight${itemNumber}`
        let p = document.createElement('p');       
        let portrait = document.createElement('img');
  
        // Change the textContent property of the h2 element to contain the companies's full name
        p.innerHTML = `${company.business} <br/> ${company.phone} <br/> <a href=${company.website} target="_blank">${company.displayurl}</a>`;
    
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', 'logo of ' + company.business);
        portrait.setAttribute('loading', 'lazy');
  
        spotlight.appendChild(portrait);
        spotlight.appendChild(p);
  
        // Add/append the existing HTML div with the cards class with the section(card)
        spotlights.appendChild(spotlight)
        itemNumber = itemNumber + 1
    }
  })


  