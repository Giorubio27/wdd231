const memberCards = document.querySelector('#membercards');

export async function getCompanyData() {
    const response = await fetch('data/memberships.json')
    const data = await response.json();

    const allMemberships = data.memberships;


    cards.innerHTML = "";

    displayMemberships(allMemberships);
}

export const displayMemberships = (memberships) => {
    memberships.foreach((membership) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let button = document.createElement('a');

        name.innerHTML = membership.name;
        button.innerHTML = membership.button;

        card.appendChild(name);
        card.appendChild(button);

        memberCards.appendChild(card);
    })
}