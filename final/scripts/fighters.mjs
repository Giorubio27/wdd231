export const fighterCards = document.querySelector('.fighters')

export async function GetFighterData() {
    const response = await fetch('data/fighters.json');
    const fighterData = await response.json();

    const allFighters = fighterData.top_fighters;

    DisplayFighterCards(allFighters);
}

export const DisplayFighterCards = (fighters) => {
    fighters.forEach((fighter) => {
        let fighterCard = document.createElement('section');
        let name = document.createElement('h2');
        let dob = document.createElement('p');
        let style = document.createElement('p');
        let birthplace = document.createElement('p');
        let record = document.createElement('p');
        let fighterPhoto = document.createElement('img');

        name.innerHTML = fighter.name;
        name.setAttribute('id', 'name')
        dob.innerHTML = fighter.dob;
        dob.setAttribute('id', 'dob')
        style.innerHTML = fighter.style;
        style.setAttribute('id', 'style')
        birthplace.innerHTML = fighter.birthplace;
        birthplace.setAttribute('id', 'birth')
        record.innerHTML = `Record: ${fighter.record}`;
        record.setAttribute('id', 'record');
        fighterPhoto.setAttribute('src', fighter.image);

        fighterCard.appendChild(name);
        fighterCard.appendChild(fighterPhoto);
        fighterCard.appendChild(dob);
        fighterCard.appendChild(style);
        fighterCard.appendChild(birthplace);
        fighterCard.appendChild(record);
        

        fighterCards.appendChild(fighterCard);
    })
}
GetFighterData();