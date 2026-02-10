export const visitPage = document.querySelector(".visit")

export let numVisits = number(window.localStorage.getItem("numVisits - 1s")) || 0;

numVisits++;

 if (numVisits !== 0) {
    visitPage.textContent = `Number of Visits: ${numVisits}`;

} else {
    visitPage.textContent = `Welcome to our Page!`
}

window.localStorage.setItem("numVisits - 1s", numVisits);