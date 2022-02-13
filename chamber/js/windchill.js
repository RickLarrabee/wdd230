let temp = 30;
let windSpeed = 2.5;
let windChill = '';

if (temp <= 50 && windSpeed > 3.0) {
    windChill = (35.74+(0.6215*temp)-(35.75*(windSpeed**0.16))+(0.4275*temp*(windSpeed**0.16))).toFixed(0);
    document.querySelector('.windChill').innerHTML = `${windChill}&deg`
}
else {
    windChill = 'N/A';
    document.querySelector('.windChill').innerHTML = windChill
}

document.querySelector('.temp').innerHTML = `${temp}&deg`;
document.querySelector('.windSpeed').innerHTML = windSpeed