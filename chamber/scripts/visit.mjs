export const visitPage = document.querySelector(".visits");

const now = Date.now();

export const lastVisit = Number(window.localStorage.getItem("lastVisitTimestamp"));

const msInDay = 1000 * 60 * 60 * 24;

if (!lastVisit) {
    visitPage.textContent = `Welcome to our page. Let us know if you have any questions`;
} else {
    const timeDifference = now - lastVisit;

    if (timeDifference < msInDay) {
        visitPage.textContent = `Back so soon! Awesome!`;
    } else {
        const daysPassed = Math.floor(timeDifference / msInDay);
        const dayText = daysPassed === 1 ? "day" : "days";

            visitPage.textContent = `It has been ${daysPassed} ${dayText} since your last visit`;
    }
}


window.localStorage.setItem("lastVisitTimestamp", now);