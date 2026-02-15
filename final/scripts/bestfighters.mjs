export const bestFightersCards = document.querySelector('.top-dog');
document.addEventListener('DOMContentLoaded', () => {
   
    GetBestFighters();
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

        fighterName.innerHTML = fighter.name;
        fighterName.setAttribute('id', 'bestname');
        fighterRecord.innerHTML = `Record: ${fighter.record}`;
        fighterRecord.setAttribute('id', 'bestrecord')
        fighterRank.innerHTML = `Rank: ${fighter.rank}`;
        fighterRank.setAttribute('id', 'fighterrank')
        fighterPhoto.setAttribute('src', fighter.image);
        fighterPhoto.setAttribute('loading', 'lazy');
        fighterPhoto.setAttribute('alt', 'fighter');
        fighterPhoto.setAttribute('id', 'fighterphoto');

        bestFighterCard.appendChild(fighterName);
        bestFighterCard.appendChild(fighterRecord);
        bestFighterCard.appendChild(fighterRank);
        bestFighterCard.appendChild(fighterPhoto);

        bestFightersCards.appendChild(bestFighterCard);


        
    })
}
GetBestFighters();