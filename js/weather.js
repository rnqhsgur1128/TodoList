const API_KEY = "fbc1a7068";

function GpGood(e) {
  const lat = e.coords.latitude;
  const log = e.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} _____ ${data.main.temp}`;
    });
}
function GpBad() {
  alert("we didn`t find you live now!");
}

navigator.geolocation.getCurrentPosition(GpGood, GpBad);
