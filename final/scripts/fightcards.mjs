const fightCards = document.querySelector('#fight-card');

async function GetFightCards() {
    const response = await fetch('data/fightcard.json');
    const fightCardData = await response.json();

    const allFightCards = fightCardData.ufc_schedule;

    DisplayFightCards(allFightCards)
}

const DisplayFightCards = (fightcards) => {
    fightcards.foreach((fightcard) => {
        let eventCard = document.createElement('section');
        let name = document.querySelector('h2');
        let date = document.querySelector('p');
        let address = document.querySelector('p');
        let time = document.querySelector('p');
        let image = document.querySelector('img');

        name.innerHTML = `${fightcard.event_name}: ${fightcard.main_event}`;
        date.innerHTML = fightcard.date;
        address.innerHTML = fightcard.address;
        time.innerHTML = fightcard.main_card_time_et;
        image.innerHTML = fightcard.image_url;


        eventCard.appendChild(name);
        eventCard.appendChild(date);
        eventCard.appendChild(address);
        eventCard.appendChild(time);
        eventCard.appendChild(image);


    })
}