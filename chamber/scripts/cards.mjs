
export const cards = document.querySelector('.business');

export const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j] = array[j], array[i]]
    }
    return array
}


export async function getCompanyData() {
    const response = await fetch('data/members.json')
    const data = await response.json();

    const allCompanies = data.companies;

    const spotlightCompanies = allCompanies.filter(company => company.membership > 1);

    const shuffledCompanyCards = shuffleCards(spotlightCompanies);

    const threesCompany = shuffledCompanyCards.slice(0, 3);

    cards.innerHTML = "";

    displayCompanyCard(threesCompany);

}





export const displayCompanyCard = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section')
        let bottomCard = document.createElement('section')
        let info = document.createElement('div')
        let name = document.createElement('h2');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');


        name.textContent = company.name;
        image.setAttribute('src', company.img);
        image.setAttribute('alt', 'companyphoto');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '125');
        image.setAttribute('height', '63');
        phone.textContent = `Phone: ${company.phone}`;
        url.textContent = `Website: ${company.companyurl}`;
        url.setAttribute('href', company.companyurl);
        card.setAttribute('class', 'business-card');
        bottomCard.setAttribute('class', 'bottom-card');
        info.setAttribute('class', 'contact-info');



        card.appendChild(name);

        bottomCard.appendChild(image);
        info.appendChild(phone);
        info.appendChild(url);
        bottomCard.appendChild(info);
        card.appendChild(bottomCard);



        cards.appendChild(card);
    })
}
getCompanyData();


