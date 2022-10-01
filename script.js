const width = document.querySelector(".slider__wrapper img").offsetWidth;
const nextBtn = document.querySelector(".next img");
const preBtn = document.querySelector(".previous img");
const sliderWrapper = document.querySelector(".slider__wrapper");

let i = 0;
nextBtn.addEventListener("click", () => {
    i = i + width;
    if (i > 3 * width) {
        i = 0;
    };
    sliderWrapper.style.left = -i + "px";
});

preBtn.addEventListener("click", () => {
    i = i - width; //slider img width
    if (i < 0) {
        i = 3 * width; //3*28
    }
    sliderWrapper.style.left = -i + "px";
});
//increment
let cost = 125.00;
let j = 0;
document.querySelector(".plus").addEventListener("click", () => {
    j++;
    document.querySelector(".count").innerHTML = j;
    document.querySelector(".amount").innerHTML = j;
    document.querySelector("#calc").innerHTML = j;
    render();
    document.querySelector("#result").innerHTML = j * cost;

});

//decrement
document.querySelector(".minus").addEventListener("click", () => {
    if (j - 1 == 0) {
          document.querySelector(".msg").style.marginTop="3.5rem";
        document.querySelector(".msg").innerHTML = "Your cart is empty"
    }
    if (j - 1 < 0) {
        return true;
    }
    j--;
    

    document.querySelector(".count").innerHTML = j;
    document.querySelector(".amount").innerHTML = j;
    document.querySelector("#calc").innerHTML = j;
    render();
    document.querySelector("#result").innerHTML = j * cost;
});
//delete
function deleteItem() {
    if (j - 1 == 0) {
         document.querySelector(".msg").style.marginTop="3.5rem";
        document.querySelector(".msg").innerHTML = "Your cart is empty"
        
    };
    j--;
  
    document.querySelector(".count").innerHTML = j;
    document.querySelector("#calc").innerHTML = j;
    document.querySelector(".amount").innerHTML = j;
    render();
    document.querySelector("#result").innerHTML = j * cost;
};
//thumbnails
const cartImg = document.querySelectorAll(".slider__thumbnail img");
const msg = document.querySelector(".msg");
var cartContainer;
let el;

function change(n) {
    sliderWrapper.style.left = -width * n + "px";
      document.querySelector(".msg").style.marginTop="1rem";
    el = cartImg[n].src;
    render();
};

function activeSlide(n) {
    if (!(window.matchMedia("(max-width: 765px)").matches)) {
        document.querySelector(".body").classList.add("active");
        preBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
        document.querySelector(".hero__img").classList.add("modal");
    }
      el = cartImg[n].src;
    render();
};
document.getElementById("addition").addEventListener("click", () => {
  
     el = cartImg[n].src;
    render();
});

function render() {
    cartContainer = `<div class="img-cart">
         <div class="div-img">
           <img src="${el}" alt="thumbnail">
         </div>
         <div class="cart-prices">
          <h3 class="subtitle">Fall Limited Edition Sneaker</h3>
         <p>$125.00 x <span id="calc">"${j}"<span>=<span id="result">"${cost*j}"</span></p>
                    </div>
         <button onclick="deleteItem()" class="icon-delete">
            <img src="./images/icon-delete.svg" alt="icon-delete">
          </button>
         </div>
      <button onclick="closeCart()" class="checkout btn">Checkout</button>`;
    msg.innerHTML = cartContainer;
};
//modal
document.querySelector(".icon-close-modal").addEventListener("click", () => {

    document.querySelector(".body").classList.remove("active");
    preBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "hidden";
    document.querySelector(".hero__img").classList.remove("modal");
   
});


//show cart
document.querySelector(".cart").addEventListener("click", () => {
    document.querySelector(".header__cart-container").classList.toggle("show")
});
//close cart
function closeCart() {
    document.querySelector(".header__cart-container").style.display = "none";
    window.location.reload();
};
//hamburger menu
document.querySelector(".hamburger").addEventListener("click", ()=> {
document.querySelector(".header__menu").style.left="0"
});
//close menu
document.querySelector(".close-btn").addEventListener("click", ()=> {
document.querySelector(".header__menu").style.left="-60%"
});