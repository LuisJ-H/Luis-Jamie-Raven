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
        // img.setAttribute('class', 'add-to-cart');
        // img.setAttribute('id', item.id)
        img.src=item.img;
        
        
        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;
        
        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart add-to-cart');
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
        // img.setAttribute('class', 'add-to-cart');
        // img.setAttribute('id', item.id)
        img.src=item.img;


        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart add-to-cart');
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
        // img.setAttribute('class', 'add-to-cart');
        // img.setAttribute('id', item.id)
        img.src=item.img;


        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart add-to-cart');
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
        // img.setAttribute('class', 'add-to-cart');
        // img.setAttribute('id', item.id)
        img.src=item.img;


        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart add-to-cart');
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
        // img.setAttribute('class', 'add-to-cart');
        // img.setAttribute('id', item.id)
        img.src=item.img;


        let star= document.createElement('i');
        star.setAttribute('class','bi bi-star-fill');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        let heart= document.createElement('i');
        heart.setAttribute('class','bi bi-suit-heart add-to-cart');
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

const categoryListData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function selectTaste(){
    let categoryList= document.getElementById('category-list');

    categoryListData.map(item=>{
        console.log(item)
        let listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        let listImg= document.createElement('img');
        listImg.src= item.img;
    
        let listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        let cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

let cartData= [];
function addToCart(){
    
    let itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    let itemObj= foodItem.find(element=>element.name==itemToAdd);

    let index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Added to cart!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
    totalAmount();
    cartItems();
}


function cartItems(){
    let tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        let tableRow= document.createElement('tr');
        
        let rowData1= document.createElement('td');
        let img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        let rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        let rowData3= document.createElement('td');
        let btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        let span= document.createElement('span');
        span.innerText= item.quantity;
        let btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        let rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}


function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    let incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

let currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount(){
    let sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : $ ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);

let flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

document.getElementById('add-address').addEventListener('click',addAddress);


function addAddress(){
    let address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")
    }
}
