import { cards, displayCompanyCard, shuffleCards } from './cards.mjs';
import { getCompanyData } from './cards.mjs';
import { getWeatherNow } from './weathertoday.mjs';
import { getEventsData } from './events.mjs';
import { GetItemData } from './items.mjs';
import { visitPage } from './visit.mjs';
import { lastVisit } from './visit.mjs';


document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("submit-time").value = new Date().toISOString();
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.hammer');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('primetime');
    navigation.classList.toggle('primetime');
});






