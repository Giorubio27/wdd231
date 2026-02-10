export const visitPage = document.querySelector(".visit")

export let numVisits = number(window.localStorage.getItem("numVisits - 1s")) || 0;
let timeBetweenVisits = 

numVisits++;

 if (numVisits !== 0) {
    visitPage.textContent = `Number of Visits: ${numVisits}`;

} else if (numVisits !== 0 && ) {
    visitPage.textContent = `Welcome to our Page. Let me know if you have any questions!`
 } else {
     
}

window.localStorage.setItem("numVisits - 1s", numVisits);