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
        let itemName = document.createElement('h3');
        let itemDescription = document.createElement('p');
        let itemImage = document.createElement('img');

        itemName.innerHTML = item.name;
        itemDescription.innerHTML = item.description;
        itemImage.setAttribute('src', item.image_url);
        
        

        itemCard.appendChild(itemName);
        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemDescription);
        

        itemCards.appendChild(itemCard);
    })
}
GetItemData();