const requestURL = "https://ricklarrabee.github.io/wdd230/templeinn/data/data.json";
const temple_select = document.querySelector("#temple");
let temple_selected = temple_select.value;
const cards = document.querySelector(".cards");
const temple_data = []
change_temple();

temple_select.addEventListener ('change',(e)=> {
    temple_selected = '';
    temple_selected = temple_select.options[temple_select.selectedIndex].value;
    temple_data.length = 0;
    cards.innerHTML = ''
    change_temple();
});

function change_temple () {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
      //console.table(jsonObject); // temporary checking for valid response and data parsing
      const temples = jsonObject["temples"];
      temples.forEach(temple_array);
    });

    function temple_array(temple) {
      let temple_id = temple.id;
      console.log(temple_selected)
      if (temple_id == temple_selected) {
        temple_data.push(temple)
        console.table(temple_data)
        temple_data.forEach(display_temple)
      }

    function display_temple(temple) {
      // Create elements to add to the document
      let card = document.createElement('section');
      let temple_name = document.createElement('h2');
      let portrait = document.createElement('img');
      let contact = document.createElement('p');
      let services = document.createElement('ol');
      let history = document.createElement('ol');
      let schedule = document.createElement('ol');

    

      temple_name.textContent = temple.name;
      contact.innerHTML = `Address: ${temple.address} <br/> phone: ${temple.phone} <br/>
      email: ${temple.email}`;
      services.innerHTML = "Services";
      history.innerHTML = "Temple History";
      schedule.innerHTML = "Closure Schedule";
      
      // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      portrait.setAttribute('class', 'temple-image')
      portrait.setAttribute('src', temple.imgurl);
      portrait.setAttribute('alt', `Portrait of ${temple.name}`);
      portrait.setAttribute('loading', 'lazy');
      temple_name.setAttribute('class', 'temple-name')
      contact.setAttribute('class', 'contact');
      services.setAttribute('class', 'services');
      history.setAttribute('class', 'history');
      schedule.setAttribute('class', 'closure');

      temple.services.forEach((item) =>{
        let li = document.createElement("li");
        li.innerHTML = item;
        services.appendChild(li);
      })

      temple.history.forEach((item) =>{
        let li = document.createElement("li");
        li.innerHTML = item;
        history.appendChild(li);
      })

      temple.closureSchedule.forEach((item) =>{
        let li = document.createElement("li");
        li.innerHTML = item;
        schedule.appendChild(li);
      })
  
      // Add/append the section(card) with the h2 element
      card.appendChild(temple_name);
      card.appendChild(contact);
      card.appendChild(services);
      card.appendChild(history);
      card.appendChild(schedule);


      // Add/append the existing HTML div with the cards class with the section(card)
      cards.appendChild(portrait)
      cards.appendChild(card)
    }
  }
}
