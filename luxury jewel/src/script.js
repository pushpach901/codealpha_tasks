/* =========================
   PRODUCTS
========================= */

const products = [
{
id:1,
name:"Imperial Diamond Ring",
price:120000,
image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
},
{
id:2,
name:"Royal Gold Necklace",
price:95000,
image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
},
{
id:3,
name:"Diamond Tennis Bracelet",
price:110000,
image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
},
{
id:4,
name:"Luxury Diamond Earrings",
price:85000,
image:"https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80"
},
{
id:5,
name:"Celestial Pearl Earrings",
price:65000,
image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
},
{
id:6,
name:"Emerald Royal Ring",
price:135000,
image:"https://images.unsplash.com/photo-1603561591411-07134e71a2d0?auto=format&fit=crop&w=800&q=80"
},
{
id:7,
name:"Platinum Infinity Band",
price:150000,
image:"https://images.unsplash.com/photo-1600721391689-2564bb8055de?auto=format&fit=crop&w=800&q=80"
},
{
id:8,
name:"Luxury Sapphire Necklace",
price:210000,
image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
},
{
id:9,
name:"Rose Gold Engagement Ring",
price:105000,
image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
},
{
id:10,
name:"Classic Solitaire Ring",
price:90000,
image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
},
{
id:11,
name:"Diamond Choker Set",
price:250000,
image:"https://images.unsplash.com/photo-1600721391776-4a7b8b5a0f8f?auto=format&fit=crop&w=800&q=80"
},
{
id:12,
name:"Luxury Bridal Set",
price:320000,
image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
}
];

/* =========================
   CART
========================= */

let cart = [];

/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId){

document.querySelectorAll(".page")
.forEach(page => {
page.classList.remove("active");
});

const selectedPage = document.getElementById(pageId);

if(selectedPage){
selectedPage.classList.add("active");
}
}

/* =========================
   PRODUCT RENDERING
========================= */

function renderProducts(){

const productGrid =
document.getElementById("productGrid");

if(!productGrid) return;

productGrid.innerHTML = "";

products.forEach(product => {

productGrid.innerHTML += `
<div class="card">

<img src="${product.image}"
alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">
₹${product.price.toLocaleString()}
</p>

<button class="btn"
onclick="addToCart(${product.id})">
Add To Cart
</button>

<button class="btn"
onclick="buyNow(${product.id})">
Buy Now
</button>

</div>
`;

});

}

/* =========================
   ADD TO CART
========================= */

function addToCart(productId){

const product =
products.find(p => p.id === productId);

if(!product) return;

cart.push(product);

updateCart();

alert(product.name + " added to cart");
}

/* =========================
   REMOVE ITEM
========================= */

function removeFromCart(index){

cart.splice(index,1);

updateCart();
}

/* =========================
   UPDATE CART
========================= */

function updateCart(){

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const cartTotal =
document.getElementById("cartTotal");

if(cartCount){
cartCount.innerText = cart.length;
}

if(!cartItems) return;

let total = 0;

cartItems.innerHTML = "";

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="item">

<span>${item.name}</span>

<div>

<span class="gold">
₹${item.price.toLocaleString()}
</span>

<button
style="
margin-left:10px;
background:red;
border:none;
padding:4px 8px;
cursor:pointer;
color:white;
border-radius:4px;
"
onclick="removeFromCart(${index})">
X
</button>

</div>

</div>
`;

});

if(cartTotal){
cartTotal.innerText =
total.toLocaleString();
}

}

/* =========================
   BUY NOW
========================= */

function buyNow(productId){

const product =
products.find(p => p.id === productId);

if(!product) return;

alert(
`Proceeding to checkout for ${product.name}
Amount: ₹${product.price.toLocaleString()}`
);

showPage("cart");

cart.push(product);

updateCart();
}

/* =========================
   CHECKOUT
========================= */

function checkout(){

if(cart.length === 0){

alert("Your cart is empty!");

return;
}

let total = 0;

cart.forEach(item=>{
total += item.price;
});

alert(
`Payment Successful ✨

Total Paid:
₹${total.toLocaleString()}

Thank you for shopping with AURA Jewelry.`
);

cart = [];

updateCart();
}

/* =========================
   SEARCH PRODUCTS
========================= */

function searchProducts(){

const input =
document.getElementById("searchInput");

if(!input) return;

const value =
input.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

}

/* =========================
   LOAD PAGE
========================= */

document.addEventListener(
"DOMContentLoaded",
function(){

renderProducts();
updateCart();

}
);