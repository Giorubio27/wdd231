const todaysTemp = document.querySelector('#for-today');
const tomorrowsTemp = document.querySelector('#for-tmw');
const anotherTemp = document.querySelector('#for-another');

const myKey = '1ba899a2af720c65ec0ea26ecb83b2df'
const lat = 36.15139252091463
const lon = -115.17088162858838
const url = `https//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;

 async function getForecastNow() {
    try {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
        
    }
}
getForecastNow();

function displayForecast(data) {
    console.log('forecast');
    todaysTemp.innerHTML = `Today: ${data.list[0].main.temp}&degF`;
    tomorrowsTemp.innerHTML = `Tommorow: ${data.list[6].main.temp}&degF`;
    anotherTemp.innerHTML = `Day After Tommorrow: ${data.list[12].main.temp}&degF`;
    
    

}