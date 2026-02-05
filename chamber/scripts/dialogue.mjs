const dialogue = document.querySelector('#member-info');
const modalButton = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener('click', () => {
    dialogue.close();
});
    



const memberCards = document.querySelector('#membercards');

export async function getMembershipData() {
    const response = await fetch('data/memberships.json')
    const memberdata = await response.json();

    const allMemberships = memberdata.memberships;


    memberCards.innerHTML = "";

    displayMemberships(allMemberships);
}

export const displayMemberships = (memberships) => {
    memberships.forEach((membership) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let button = document.createElement('button');

        name.innerHTML = membership.name;
        button.innerHTML = membership.button;
        button.addEventListener('click', () => {
            modalButton.innerHTML = `
            <h2>${membership.name}</h2>
            <p>${membership.perks}</P>
            <p>Price: ${membership.cost}</P>`;
            dialogue.showModal();
        });

        card.appendChild(name);
        card.appendChild(button);

        memberCards.appendChild(card);
    });
}
getMembershipData();