// =======================
// LOADER FIX (IMPORTANT)
// =======================
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  }
});

const spiderImages = [
"spider tee front.jpeg",
"spider tee back.jpeg"
];

let current = 0;

function nextImage(){

current++;

if(current >= spiderImages.length){
current = 0;
}

document.getElementById("spiderImage").src =
spiderImages[current];

}

function prevImage(){

current--;

if(current < 0){
current = spiderImages.length - 1;
}

document.getElementById("spiderImage").src =
spiderImages[current];

}


// =======================
// CART SYSTEM
// =======================
let cart = {
  product: "Spider Street Tee",
  price: 3200,
  size: "M"
};

function addToCart() {
  // try to get size (if exists)
  let sizeElement = document.getElementById("size");

  if (sizeElement) {
    cart.size = sizeElement.value;
  }

  // show cart safely
  const cartBox = document.getElementById("cart");
  const cartItem = document.getElementById("cartItem");

  if (cartBox && cartItem) {
    cartItem.innerText = `${cart.product} - Size: ${cart.size} - Rs.${cart.price}`;
    cartBox.classList.remove("hidden");
  } else {
    alert("Cart added!");
  }
}


// =======================
// OPEN CHECKOUT
// =======================
function openCheckout() {
  const checkout = document.getElementById("checkout");

  if (checkout) {
    checkout.classList.remove("hidden");
  }
}


// =======================
// WHATSAPP ORDER SYSTEM
// =======================
function sendWhatsAppOrder() {

  const name = document.getElementById("name")?.value || "";
  const address = document.getElementById("address")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const payment = document.getElementById("payment")?.value || "COD";

  const message =
`🛍 NEW ORDER - ZAZA CLOTHING

👕 Product: ${cart.product}
📏 Size: ${cart.size}
💰 Price: Rs.${cart.price}

👤 Name: ${name}
📍 Address: ${address}
📞 Phone: ${phone}
💳 Payment: ${payment}

🔥 Thank you for ordering ZAZA`;

  // 👉 YOUR WHATSAPP NUMBER (CHANGE IF NEEDED)
  const whatsappNumber = "94766517421";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

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
    front: "neymar front.jpeg",
    back: "neymar back.jpeg",
    title: "Neymar Skill Edition"
  }
};

let selectedPlayer = "";

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

function closeProduct() {
  document.getElementById("modal").style.display = "none";
}

function orderFifaShirt() {

  const size =
    document.getElementById("fifa-size").value;

  const shirt =
    fifaProducts[selectedPlayer].title;

  const message =
` FIFA 2026 Order

 Shirt: ${shirt}
 Size: ${size}

I would like to place an order.`;

  const whatsappNumber = "94766517421";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}