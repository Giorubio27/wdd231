import { GetFighterData } from "./fighters.mjs";
import { DisplayFighterCards } from "./fighters.mjs";
import { fighterCards } from "./fighters.mjs";
import { fightCards } from "./fightcards.mjs";
import { DisplayBestFighters, GetBestFighters } from "./bestfighters.mjs";
import { bestFightersCards } from "./bestfighters.mjs";



document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
// document.getElementById("submit-time").value = new Date().toISOString();
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.hammerfist');

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('itstime');
    navigation.classList.toggle('itstime');
});
