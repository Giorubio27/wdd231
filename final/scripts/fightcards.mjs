const fightCardDialogue = document.querySelector('#fightcard-info');
const fightCardModalButton = document.querySelector('#fightcard-modal');
const fightCardCloseModal = document.querySelector('#close-fightcard-modal');

export const fightCards = document.querySelector('#fight-card');
document.addEventListener('DOMContentLoaded', () => {
   
    GetFightCards();
});
fightCardCloseModal.addEventListener('click', () => {
    fightCardDialogue.close();
});

export async function GetFightCards() {
    const response = await fetch('data/fightcard.json');
    const fightCardData = await response.json();

    const allFightCards = fightCardData.ufc_schedule;

    DisplayFightCards(allFightCards);
}


export const DisplayFightCards = (fightcards) => {
    fightcards.forEach((fightcard) => {
        let eventCard = document.createElement('section');
        let name = document.createElement('h2');
        let date = document.createElement('p');
        let address = document.createElement('p');
        let time = document.createElement('p');
        let fightCardButton = document.createElement('button');

        name.innerHTML = `${fightcard.event_name}: ${fightcard.main_event}`;
        date.innerHTML = `${fightcard.date}`;
        address.innerHTML = `Location: ${fightcard.address}`;
        time.innerHTML = fightcard.main_card_time_et;
        eventCard.setAttribute('id', 'cardevent');
        fightCardButton.innerHTML = `Learn More`;
        fightCardButton.addEventListener('click', () => {
        fightCardModalButton.innerHTML = `
        <h2>${fightcard.event_name}</h2>
        <p>Venue: ${fightcard.venue}</p>
        <p>MainEvent: ${fightcard.main_event}</p>
        <img src="${fightcard.image_url}" alt="fightcard width="300" height="200">
        `;
        fightCardDialogue.showModal();
        });


        eventCard.appendChild(name);
        eventCard.appendChild(date);
        eventCard.appendChild(address);
        eventCard.appendChild(time);
        eventCard.appendChild(fightCardButton);
        

        fightCards.appendChild(eventCard);


    })
}
