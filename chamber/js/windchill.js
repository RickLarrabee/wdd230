const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5314245&units=imperial&APPID=96177d494514829db17df98e0f50bdce";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let temp = jsObject.main.temp
    let windSpeed = jsObject.wind.speed
    let windChill = ''
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#caption").textContent = desc;
    document.querySelector(".windSpeed").innerHTML = windSpeed;
    if (temp <= 50 && windSpeed > 3.0) {
      windChill = (35.74+(0.6215*temp)-(35.75*(windSpeed**0.16))+(0.4275*temp*(windSpeed**0.16))).toFixed(0);
      document.querySelector('.windChill').innerHTML = `${windChill}&deg;`
    }
    else {
      windChill = 'N/A';
      document.querySelector('.windChill').innerHTML = windChill
    }

  });
