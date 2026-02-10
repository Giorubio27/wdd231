const itemDialogue = document.querySelector('#item-info');
const itemModalButton = document.querySelector('#item-modal');
const itemCloseModal = document.querySelector('#close-item-modal');

itemCloseModal.addEventListener('click', () => {
    itemDialogue.close();
});
export const itemCards = document.querySelector('.items');

export async function GetItemData() {
    const response = await fetch('data/items.json')
    const itemData = await response.json();

    const allItems = itemData.items;

    displayItemCards(allItems);
}


export const displayItemCards = (items) => {
    items.forEach((item) => {
        let itemCard = document.createElement('section');
        let itemName = document.createElement('h2');
        let itemDescription = document.createElement('p');
        let itemImage = document.createElement('img');
        let itemButton = document.createElement('button');

        itemName.innerHTML = item.name;
        itemDescription.innerHTML = item.description;
        itemImage.setAttribute('src', item.image_url);
        itemImage.setAttribute('alt', item.name);
        itemButton.innerHTML = `Learn More`;
        itemButton.addEventListener('click', () => {
            itemModalButton.innerHTML = `
            <h2>${item.name}</h2>
            <p>Description: ${item.description}</P>
            <p>Address: ${item.address}</P>`;
            itemDialogue.showModal();
        });
        
        

        itemCard.appendChild(itemName);
        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemDescription);
        itemCard.appendChild(itemButton);
        

        itemCards.appendChild(itemCard);
    })
}
GetItemData();