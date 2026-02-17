const memberDialogue = document.querySelector('#fightmember-info');
const memberModalButton = document.querySelector('#fightmembermodal');
const closeModal = document.querySelector('#close-member-modal');

closeModal.addEventListener('click', () => {
    dialogue.close();
});

export const memberCards = document.querySelector('#member-card');
document.addEventListener('DOMContentLoaded', () => {
   
    GetMemberInfo();
});
memberCardCloseModal.addEventListener('click', () => {
    memberCardDialogue.close();
});

export async function GetMemberInfo() {
    const response = await fetch('data/ufcmember.json');
    const memberInfoData = await response.json();

    const allInfo = memberInfoData.memberships;

    DisplayMemberInfo(allInfo);
}

const DisplayMemberInfo = (memberships) => {
    memberships.forEach((membership) => {
        let memberCard = document.createElement('section');
        let name = document.createElement('h3');
        let button = document.createElement('button');

        name.innerHTML = membership.name;
        button.innerHTML = membership.button;
        button.addEventListener('click', () => {
            memberModalButton.innerHTML = `
            <h2>${membership.name}</h2>
            <p>${membership.benefits}</P>
            <p>Price: ${membership.price}</P>`;
            memberDialogue.showModal();
            memberModalButton.setAttribute('background-color', membership.colortheme);
        });

        memberCard.appendChild(name);
        memberCard.appendChild(button);

       
    })
}