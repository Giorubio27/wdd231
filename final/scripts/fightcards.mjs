export const fightCards = document.querySelector('#fight-card');

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
        let image = document.createElement('img');

        name.innerHTML = `${fightcard.event_name}: ${fightcard.main_event}`;
        date.innerHTML = fightcard.date;
        address.innerHTML = fightcard.address;
        time.innerHTML = fightcard.main_card_time_et;


        eventCard.appendChild(name);
        eventCard.appendChild(date);
        eventCard.appendChild(address);
        eventCard.appendChild(time);
        eventCard.appendChild(image);

        fightCards.appendChild(eventCard);


    })
}
GetFightCards();