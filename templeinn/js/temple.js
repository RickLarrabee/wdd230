const requestURL = 'https://ricklarrabee.github.io/wdd230/templeinn/data/data.json';

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
    let order = '';
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = temple.name;
    p.innerHTML = `address: ${temple.address} <br/> phone: ${temple.phone} <br/> email: ${temple.email}` 
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.imagurl);
    portrait.setAttribute('alt', `Portrait of ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);

   

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card)
  }