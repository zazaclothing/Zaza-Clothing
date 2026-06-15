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