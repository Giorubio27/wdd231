const memberDialogue = document.querySelector('#fightmember-info');
const memberModalButton = document.querySelector('#fightmembermodal');
const memberCloseModal = document.querySelector('#close-member-modal');


export const memberCards = document.querySelector('#member-card');
document.addEventListener('DOMContentLoaded', () => {
   
    GetMemberInfo();
});
memberCloseModal.addEventListener('click', () => {
    memberDialogue.close();
});

export async function GetMemberInfo() {
    try {
        const response = await fetch('data/ufcmember.json');
        if (!response.ok) {
            throw new error(`HTTP error! status: ${response.status}`);
        }
        const memberInfoData = await response.json();

        const allInfo = memberInfoData.memberships;

        DisplayMemberInfo(allInfo);
    } catch (error) {
        console.error('Failed to load member data', error)
    }
}

const DisplayMemberInfo = (memberships) => {
    memberships.forEach((membership) => {
        let memberCard = document.createElement('section');
        let name = document.createElement('h3');
        let button = document.createElement('button');

        name.innerHTML = membership.name;
        memberCard.style.backgroundColor = membership.colortheme;
        button.innerHTML = `Learn More`;
        button.addEventListener('click', () => {
            
            memberModalButton.innerHTML = `
            <h2>Tier: ${membership.name}</h2>
            <p>Benefits: ${membership.benefits}</P>
            <p>Price: ${membership.price}</P>
            `;
            memberDialogue.showModal();
            
        });

        memberCard.appendChild(name);
        memberCard.appendChild(button);

        memberCards.appendChild(memberCard);

       
    })
}