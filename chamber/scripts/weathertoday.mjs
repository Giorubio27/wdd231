const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemp = document.querySelector('#current-weather');
const myIcon = document.querySelector('#weather-icon');

const myKey = '1ba899a2af720c65ec0ea26ecb83b2df'
const lat = 36.15139252091463
const lon = -115.17088162858838
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;




export async function getWeatherNow() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
getWeatherNow();


export function displayWeather(data) {
    console.log('Weather');
    myTown.innerHTML = `${data.name}`;
    myDescription.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myIcon.setAttribute('src', iconsrc);
    myIcon.setAttribute('alt', data.weather[0].description);
}


