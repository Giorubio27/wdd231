const fighterDialogue = document.querySelector('#fighter-info');
const fighterModalButton = document.querySelector('#fighter-modal');
const fighterCloseModal = document.querySelector('#close-fighter-modal');



export const bestFightersCards = document.querySelector('.top-dog');
document.addEventListener('DOMContentLoaded', () => {
   
    GetBestFighters();
});

fighterCloseModal.addEventListener('click', () => {
    fighterDialogue.close();
});

export async function GetBestFighters() {
    
    try {
        const response = await fetch('data/fighters.json')
        if (!response.ok) {
            throw new error(`HTTP error! status: ${response.status}`);
            
        }
        const topFighterData = await response.json();

        const allFighters = topFighterData.top_fighters;




        const topFive = allFighters.filter(fighter => fighter.rank < 5);

        DisplayBestFighters(topFive);
        
    } catch (error) {
        console.error('Failed to load fighter data:', error);
    }
}


export const DisplayBestFighters = (bestFighters) => {
    bestFighters.forEach((fighter) => {
        let bestFighterCard = document.createElement('section');
        let fighterName = document.createElement('p');
        let fighterRecord = document.createElement('p');
        let fighterRank = document.createElement('p');
        let fighterPhoto = document.createElement('img');
        let fighterButton = document.createElement('button');

        fighterName.innerHTML = fighter.name;
        fighterName.setAttribute('id', 'bestname');
        fighterRecord.innerHTML = `Record: ${fighter.record}`;
        fighterRecord.setAttribute('id', 'bestrecord')
        fighterRank.innerHTML = `Rank: ${fighter.rank}`;
        fighterRank.setAttribute('id', 'fighterrank')
        fighterPhoto.setAttribute('src', fighter.image);
        fighterPhoto.setAttribute('fetchpriority', 'high');
        fighterPhoto.setAttribute('alt', fighter.name);
        fighterPhoto.setAttribute('width', '250')
        fighterPhoto.setAttribute('height', '167')
        fighterPhoto.setAttribute('id', 'fighterphoto');
        fighterButton.innerHTML = `Learn More`;
        fighterButton.addEventListener('click', () => {
            fighterModalButton.innerHTML = `
            <h2>${fighter.name}</h2>
            <p>Style: ${fighter.style}</p>
            <p>DOB: ${fighter.dob}</p>
            <p>BirthPlace: ${fighter.birthplace}</p>
            <p>Rank: ${fighter.rank}</p>
            <p>Record: ${fighter.record}</p>`;
            fighterDialogue.showModal();
        });

        bestFighterCard.appendChild(fighterName);
        bestFighterCard.appendChild(fighterRecord);
        bestFighterCard.appendChild(fighterRank);
        bestFighterCard.appendChild(fighterPhoto);
        bestFighterCard.appendChild(fighterButton);
        
            

        bestFightersCards.appendChild(bestFighterCard);


        
    })
}
