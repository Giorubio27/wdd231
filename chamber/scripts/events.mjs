
export const eventCards = document.querySelector('.events');

export const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[i]]
    }
    return array
}


export async function getEventsData() {
    const response = await fetch('data/events.json')
    const data = await response.json();

    const allEvents = data.events;

    

    const shuffledEventCards = shuffleCards(allEvents);

    const threeEvents = shuffledEventCards.slice(0, 3);

    eventCards.innerHTML = "";

    displayEventCard(threeEvents);

}





export const displayEventCard = (events) => {
    events.forEach((event) => {
        let card = document.createElement('section')
        let bottomCard = document.createElement('section')
        let info = document.createElement('div')
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let price = document.createElement('p');
        let time = document.createElement('p');
        let date = document.createElement('p');
        let address = document.createElement('p')


        name.textContent = event.name;
        address.textContent = `Address: ${event.address}`;
        price.innerHTML = `Price: ${event.price}`;
        date.innerHTML = `Date: ${event.date}`;
        time.innerHTML = `Time: ${event.time}`;
        image.setAttribute('src', event.img);
        image.setAttribute('alt', 'event photo');
        image.setAttribute('width', '125px');
        image.setAttribute('height', '63px');
        card.setAttribute('class', 'event-card');
        bottomCard.setAttribute('class', 'bottom-eventcard');
        info.setAttribute('class', 'contact-info');



        card.appendChild(name);
        info.appendChild(address);
        info.appendChild(date);
        info.appendChild(time);
        info.appendChild(price);
        bottomCard.appendChild(image);
        bottomCard.appendChild(info);
        card.appendChild(bottomCard);



        eventCards.appendChild(card);
    })
}
getEventsData();



