document.getElementById("last_modified").innerHTML = document.lastModified;
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.hammer');
const cards = document.querySelector('#company-displays');
const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('article');

gridbutton.addEventListener('click', () => {
    display.classList.add('bcards');
    display.classList.remove('list');
});

listbutton.addEventListener('click', showList);

function showList() {
    display.classList.add('list');
    display.classList.remove('grid');
}


hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('primetime');
    navigation.classList.toggle('primetime');
});

async function getCompanyData() {
    const response = await fetch('data/members.json')
    const data = await response.json();

    displayCompanyCard(data.companies)

}

const displayCompanyCard = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section')
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('p')

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        url.textContent = company.companyurl;
        url.setAttribute('href', company.companyurl);
        image.setAttribute('src', company.img);
        image.setAttribute('alt', 'companyphoto')
        membership.innerHTML = `Current Membership is: ${company.membership}`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        
        card.appendChild(membership);

        cards.appendChild(card);



    });
}
getCompanyData();


