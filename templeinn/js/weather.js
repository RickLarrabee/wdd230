const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4348599&units=imperial&APPID=96177d494514829db17df98e0f50bdce";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  });