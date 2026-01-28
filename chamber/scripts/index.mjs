import { cards, displayCompanyCard, shuffleCards } from './cards.mjs';
import { getCompanyData } from './cards.mjs';
import { getWeatherNow } from './weathertoday.mjs';
import { getEventsData } from './events.mjs';

document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.hammer');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('primetime');
    navigation.classList.toggle('primetime');
});



