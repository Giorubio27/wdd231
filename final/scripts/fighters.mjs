export const fighterCards = document.querySelector('.fighters')
document.addEventListener('DOMContentLoaded', () => {
   
    GetFighterData();
});

export async function GetFighterData() {
    const response = await fetch('data/fighters.json');
    const fighterData = await response.json();

    const allFighters = fighterData.top_fighters;

    DisplayFighterCards(allFighters);
}

export const DisplayFighterCards = (fighters) => {
    fighterCards.innerHTML = '';
    
    fighters.forEach((fighter) => {
        let fighterCard = document.createElement('section');
        let name = document.createElement('h2');
        name.className = 'fighter-name';
        let dob = document.createElement('p');
        dob.className = 'dob'
        let style = document.createElement('p');
        style.className = 'style'
        let birthplace = document.createElement('p');
        birthplace.className = 'birthplace'
        let record = document.createElement('p');
        record.className = 'record';
        let fighterPhoto = document.createElement('img');
        fighterPhoto.className = 'fighterphoto';

        name.innerHTML = fighter.name;
        
        dob.innerHTML = fighter.dob;
        style.innerHTML = fighter.style;
        style.setAttribute('id', 'style')
        birthplace.innerHTML = fighter.birthplace;
        record.innerHTML = `Record: ${fighter.record}`;
        fighterPhoto.setAttribute('src', fighter.image);
        fighterPhoto.setAttribute('fetchpriority', 'high');
        fighterPhoto.setAttribute('width', '250');
        fighterPhoto.setAttribute('height', '167');
        fighterPhoto.setAttribute('alt', fighter.name);

        fighterCard.appendChild(name);
        fighterCard.appendChild(fighterPhoto);
        fighterCard.appendChild(dob);
        fighterCard.appendChild(style);
        fighterCard.appendChild(birthplace);
        fighterCard.appendChild(record);
        

        fighterCards.appendChild(fighterCard);
    })
}
