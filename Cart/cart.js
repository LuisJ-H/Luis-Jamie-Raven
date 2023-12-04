import {foodItem} from "./fooditem.js";

function displayItems(){
  let rice = document.getElementById('rice');
  let appetizer = document.getElementById('appetizer');
  let entree = document.getElementById('entree');
  let dessert = document.getElementById('dessert');
  let drinks = document.getElementById('drinks');

  const riceData  = foodItem.filter(item => item.category== 'rice');
  console.log(riceData);
  const appetizerData = foodItem.filter(item => item.category== 'appetizer');
  console.log(appetizerData);
  const entreeData = foodItem.filter(item => item.category== 'entree');
  console.log(entreeData);
  const dessertData = foodItem.filter(item => item.category== 'dessert');
  console.log(dessertData);
  const drinksData = foodItem.filter(item => item.category== 'drinks');
  console.log(drinksData);

  riceData.forEach(item=> {
    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('id', 'card-container');

    let cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    let star = document.createElement('i');
    star.setAttribute('id', 'bi bi-star-fill');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;
    
    let heart = document.createElement('i');
    heart.setAttribute('id', 'heart-outline');
    heart.setAttribute('id', item.id);
    

    cardTop.appendChild(star);
    cardTop.append(heart);

    let img =document.createElement('img')
    img.src = item.img;

    let itemName = document.createElement('p');
    itemName.setAttribute('id','food-name');
    itemName.innerText = item.name;

    let itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'food-price');
    itemPrice.innerText = 'Price : $ ' + item.price;

    cardContainer.appendChild(cardTop);
    cardContainer.appendChild(img);
    cardContainer.appendChild(itemName);
    cardContainer.appendChild(itemPrice);

    rice.appendChild(cardContainer);


  });
}

displayItems();



// Heart toggle 
function toggleFavorite() {
    let favoriteIcon = document.getElementById('favorite');

    favoriteIcon.name = (favoriteIcon.name === 'heart-outline') ? 'heart' : 'heart-outline';

    favoriteIcon.classList.toggle('red-heart', favoriteIcon.name === 'heart');
  }

toggleFavorite();