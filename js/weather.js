const COORDS = 'coords';
const API_KEY = "b3c0c29197dca2b6dcfeb8aee2abca67";
const weather = document.querySelector(".js-weather");
const weather_icon = document.querySelector(".weatherIcon");






function getweather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temp = json.main.temp;
            const country = json.sys.country;
            const place = json.name;
            console.log(json)
            const icon = json.weather[0].icon;

            console.log(icon)
            
            weather_icon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            weather.innerText = `${temp}° @ ${country}_${place}`;

        });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getweather(latitude, longitude);

}


function handleGeoError(){
    console.log("cant accenss geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); 
    if (loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getweather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();