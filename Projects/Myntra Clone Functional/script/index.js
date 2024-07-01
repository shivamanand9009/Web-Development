let bagItems;
onload();

function onload() {
    let bagItemsStr = localStorage.getItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) :[];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
document.addEventListener('DOMContentLoaded', function() {
    displayBagIcon();
});

function displayBagIcon() {
    let BagItemCountElement = document.querySelector('.bag_item_count');
    if (BagItemCountElement) {
        if (bagItems.length > 0) {
            BagItemCountElement.style.visibility = 'visible';
            BagItemCountElement.innerText = bagItems.length;
        } else {
            BagItemCountElement.style.visibility = 'hidden';
        }
    } 
    // else {
    //     console.error('Element with class "bag_item_count" not found.');
    // }
}

function displayItemsOnHomePage() {
    let itemContainerElement = document.querySelector('.items_container');
    if (!itemContainerElement) {
        return;
    }

    let innerHTML  ='';
    item.forEach(item =>{
        innerHTML += 
        `       <div class="item_container">
                    <img class="item_img" src="${item.item_img}" alt="ring">
                    <div class="rating">
                        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
                    </div>
                    <div class="company_name">${item.company_name}</div>
                    <div class="item_name">
                        ${item.item_name}
                    </div>
                    <div class="price">
                        <span class="curr_price">₹${item.curr_price}</span>
                        <span class="orignal_price">₹${item.orignal_price}</span>
                        <span class="discount">(${item.discount}% OFF)</span>
                    </div>
                    <button class="btn_add_bag" onclick = "addToBag(${item.id})">👜 Add to Bag</button>
                </div>
        `
    });

    itemContainerElement.innerHTML = innerHTML;    
}
