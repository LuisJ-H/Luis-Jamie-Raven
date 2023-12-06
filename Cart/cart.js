import {foodItem} from './fooditem.js'

function displayItems(){
    let rice= document.getElementById('rice');
    let appetizer=  document.getElementById('appetizer');;
    let entree=  document.getElementById('entree');
    let dessert=  document.getElementById('dessert');
    let drinks=  document.getElementById('drinks');


    const riceData= foodItem.filter((item)=>item.category=='rice');
    const entreeData= foodItem.filter((item)=>item.category=='entree');
    const appetizerData= foodItem.filter((item)=>item.category=='appetizer');
    const dessertData= foodItem.filter((item)=>item.category=='dessert');
    const drinksData= foodItem.filter((item)=>item.category=='drinks');
    riceData.map(item=>{
        
        let cardContainer= document.createElement('div');
        cardContainer.setAttribute('id','card-container')

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');
        
        let cardImg= document.createElement('div');
        cardImg.setAttribute('id','card-img');

        let img= document.createElement('img');
        img.src=item.img;
        
        
        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        
        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        
        cardImg.appendChild(img);
        
        let itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;
        
        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(itemName);
        cardContainer.appendChild(itemPrice);

        rice.appendChild(cardContainer);
        
    })


    entreeData.map(item=>{
        let cardContainer= document.createElement('div');
        cardContainer.setAttribute('id','card-container')

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        let cardImg= document.createElement('div');
        cardImg.setAttribute('id', 'card-img');

        let img= document.createElement('img');
        img.src=item.img;

        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        cardImg.appendChild(img);


        let itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(itemName);
        cardContainer.appendChild(itemPrice);
        
        entree.appendChild(cardContainer);

    })

    appetizerData.map(item=>{
        let cardContainer= document.createElement('div');
        cardContainer.setAttribute('id','card-container')

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        let cardImg= document.createElement('div');
        cardImg.setAttribute('id', 'card-img');

        let img= document.createElement('img');
        img.src=item.img;

        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        cardImg.appendChild(img);


        let itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(itemName);
        cardContainer.appendChild(itemPrice);
        
        appetizer.appendChild(cardContainer);

    })

    dessertData.map(item=>{
        let cardContainer= document.createElement('div');
        cardContainer.setAttribute('id','card-container')

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        let cardImg= document.createElement('div');
        cardImg.setAttribute('id', 'card-img');

        let img= document.createElement('img');
        img.src=item.img;

        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        cardImg.appendChild(img);

        let itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(itemName);
        cardContainer.appendChild(itemPrice);
        
        
        dessert.appendChild(cardContainer);
    
    })

    drinksData.map(item=>{
        let cardContainer= document.createElement('div');
        cardContainer.setAttribute('id','card-container')

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        let cardImg= document.createElement('div');
        cardImg.setAttribute('id', 'card-img');
        
        let img= document.createElement('img');
        img.src=item.img;

        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart');
        heart.setAttribute('id',item.id);

        // let cardTopImg 

        cardTop.appendChild(star);
        cardTop.appendChild(heart);
        
        cardImg.appendChild(img);


        let itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        cardContainer.appendChild(cardTop);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(itemName);
        cardContainer.appendChild(itemPrice);
        
        drinks.appendChild(cardContainer);
        
    })
}
displayItems();

const cartContainer = document.querySelector('.cart-container');
const checkoutBtn = document.getElementById('checkoutBtn');
const itemsCount = document.getElementById('items');
const totalAmount = document.getElementById('total-amount');

let cart = [];

// Function to render items in the cart
function renderCart() {
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartRow = document.createElement('div');
        cartRow.classList.add('card-row');

        // Build your cartRow HTML structure here, similar to your existing HTML

        cartContainer.appendChild(cartRow);
    });

    updateTotal();
}

// Function to update the total amount and items count
function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    totalAmount.textContent = `$${total.toFixed(2)}`;
    itemsCount.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
}

// Function to handle the "Remove" button click
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

// Add event listener for checkout button
checkoutBtn.addEventListener('click', function () {
    // Implement your checkout logic here
    // You can send the cart data to a server, process payment, etc.
    alert('Thank you for youre purchase!');
});

// Add event listener to handle "Remove" button clicks
cartContainer.addEventListener('click', function (event) {
    if (event.target.id === 'remove') {
        const itemId = parseInt(event.target.dataset.itemId);
        removeFromCart(itemId);
    }
});

// Initialize the cart with some default items
cart = [
    {
        id: 3,
        name: 'Moro',
        price: 11.93,
        quantity: 2
    },
    // Add more default items if needed
];

// Render the initial cart
renderCart();
