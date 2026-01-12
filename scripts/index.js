document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear(); 
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector(".hammy")

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('showtime');
    navigation.classList.toggle('showtime');
});