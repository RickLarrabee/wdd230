const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.025669&lon=-77.07637&exclude=minutely,hourly&units=imperial&APPID=96177d494514829db17df98e0f50bdce";
const d = new Date();
const days =  ["Sun","Mon","Tues","Wed","Thur","Fri","Sat", "Sun", "Mon", "Tues"];
//let day = days[d.getDay()];

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const current_card = document.querySelector('.current-weather');
    const forecast_cards = document.querySelector('.forecast'); 
    let current_temp = jsObject.current.temp;
    let current_humidity = jsObject.current.humidity;
    let current_wind = jsObject.current.wind_speed;
    let current_icon = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let current_alerts = jsObject.alerts;
    if (current_alerts == null) {
      current_alerts = '';
      console.log(current_alerts);
    } else {
      current_alerts = jsObject.alerts.event;
      let weather_alert = document.querySelector('.weather-alert');
      weather_alert.innerHTML = current_alerts;
    }

    let current_weather = document.createElement('section');
    let weather_now = document.createElement('h2')
    let weather_icon = document.createElement('img');
    let current_data = document.createElement('p');

    weather_icon.setAttribute('src', current_icon);
    weather_icon.setAttribute('alt', 'weather icon');
    weather_icon.setAttribute('loading', 'lazy');
  
    weather_now.innerHTML = "Current Weather";
    current_data.innerHTML = `Temp: ${Math.round(current_temp)}&deg F <br/> Wind Speed: ${current_wind} MPH <br/>
    Humidity: ${current_humidity}%`;

    current_weather.appendChild(weather_now);
    current_weather.appendChild(weather_icon);
    current_weather.appendChild(current_data);

    current_card.appendChild(current_weather);

    for (let i = 0; i < 4; i++) {
      let forecast_icon = `https://openweathermap.org/img/w/${jsObject.daily[i].weather[0].icon}.png`
      let forecast = document.createElement('section');
      let day_tag = document.createElement('h2');
      let day_icon = document.createElement('img');
      let day_data = document.createElement('p');

      day_icon.setAttribute('src', `${forecast_icon}`);
      day_icon.setAttribute('alt', 'weather icon');
      day_icon.setAttribute('loading', 'lazy');
      let day = days[d.getDay() + i];
      day_tag.innerHTML = `${day}`;
      day_data.innerHTML = `High: ${Math.round(jsObject.daily[i].temp.max)}&deg F<br/> 
      Low: ${Math.round(jsObject.daily[i].temp.min)}&deg F`
 
      forecast.appendChild(day_tag);      
      forecast.appendChild(day_icon);
      forecast.appendChild(day_data);

      forecast_cards.appendChild(forecast);
    }
  });