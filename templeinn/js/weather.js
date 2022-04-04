const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.025669&lon=-77.07637&exclude=minutely,hourly&units=imperial&APPID=96177d494514829db17df98e0f50bdce";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  });