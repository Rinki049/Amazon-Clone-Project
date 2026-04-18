// === SEARCH FUNCTIONALITY ===
const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`You searched for: ${query}`);
        // Later: integrate with product search API
    } else {
        alert("Please enter something to search.");
    }
});

// === CART FUNCTIONALITY ===
let cartCount = 0;
const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {
    alert(`You have ${cartCount} item(s) in your cart.`);
});

// Add to cart (when "See more" clicked)
const addToCartBtns = document.querySelectorAll(".box-contant p");

addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        alert("Item added to cart!");
        updateCartUI();
    });
});

function updateCartUI() {
    cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
}

// === BACK TO TOP ===
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// === MENU TOGGLE ===
const menuBtn = document.querySelector(".panel-all");
menuBtn.addEventListener("click", () => {
    alert("Menu clicked - here you can open a sidebar navigation");
});

// === SIGN IN ===
const signIn = document.querySelector(".nav-signin");
signIn.addEventListener("click", () => {
    alert("Sign-in functionality coming soon!");
});
