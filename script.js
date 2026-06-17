// =======================
// LOADER
// =======================
window.addEventListener("load", function () {
const loader = document.getElementById("loader");

if (loader) {
setTimeout(() => {
loader.style.display = "none";
}, 1500);
}
});

// =======================
// SPIDER TEE SLIDER
// =======================
const spiderImages = [
"spider tee front.jpeg",
"spider tee back.jpeg"
];

let current = 0;

function nextImage() {
current++;

if (current >= spiderImages.length) {
current = 0;
}

document.getElementById("spiderImage").src =
spiderImages[current];
}

function prevImage() {
current--;

if (current < 0) {
current = spiderImages.length - 1;
}

document.getElementById("spiderImage").src =
spiderImages[current];
}

// =======================
// CART
// =======================
let cart = {
product: "Spider Street Tee",
price: 3200,
size: "M"
};

function addToCart() {
alert("Spider Street Tee added to cart!");
}

// =======================
// WHATSAPP ORDER FORM
// =======================
function sendWhatsAppOrder() {

const name =
document.getElementById("name")?.value || "";

const address =
document.getElementById("address")?.value || "";

const phone =
document.getElementById("phone")?.value || "";

const payment =
document.getElementById("payment")?.value || "COD";

const message =
`🛍 NEW ORDER - ZAZA CLOTHING

 Product: ${cart.product}
 Size: ${cart.size}
 Price: Rs.${cart.price}

 Name: ${name}
 Address: ${address}
 Phone: ${phone}
 Payment: ${payment}

🔥 Thank you for ordering ZAZA`;

const whatsappNumber = "94766517421";

window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
"_blank"
);
}

// =======================
// FIFA PRODUCTS
// =======================
const fifaProducts = {
messi: {
front: "messi front.jpeg",
back: "messi back.jpeg",
title: "Messi GOAT Edition"
},

ronaldo: {
front: "ronaldo front.jpeg",
back: "ronaldo back.jpeg",
title: "Ronaldo Legend Edition"
},

neymar: {
front: "neymar back.jpeg",
back: "neymar front.jpeg",
title: "Neymar Skill Edition"
}
};

let selectedPlayer = "";

// =======================
// OPEN PRODUCT
// =======================
function openProduct(player) {

selectedPlayer = player;

document.getElementById("modal").style.display = "block";

document.getElementById("product-title").innerText =
fifaProducts[player].title;

document.getElementById("product-front").src =
fifaProducts[player].front;

document.getElementById("product-back").src =
fifaProducts[player].back;
}

// =======================
// CLOSE PRODUCT
// =======================
function closeProduct() {
document.getElementById("modal").style.display = "none";
}

// =======================
// FIFA WHATSAPP ORDER
// =======================
function orderFifaShirt() {

const size =
document.getElementById("fifa-size").value;

const shirt =
fifaProducts[selectedPlayer].title;

const message =
`🔥 FIFA 2026 ORDER

 Shirt: ${shirt}
 Size: ${size}

I would like to place an order.`;

const whatsappNumber = "94766517421";

window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
"_blank"
);
}
