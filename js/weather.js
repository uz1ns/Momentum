const API_KEY = "9e2a05c90c2ad4186c2e24322a1b68f7";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = `@ ${data.name}`;
            const tmp = (data.main.temp).toFixed(1);
            weather.innerText = `${data.weather[0].main}  ${tmp}°`;
        });
}

function onGeoError(){
    alert("[Error : can't load your current location.]");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
