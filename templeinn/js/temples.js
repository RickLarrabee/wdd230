const requestURL = 'https://ricklarrabee.github.io/wdd230/templeinn/data/data.json';

function companyCards () {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];  
    });
}