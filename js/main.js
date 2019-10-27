let mapPopup = document.querySelector(".modal-map");
let mapButton = document.querySelector(".open-modal-write-us");
let mapCloseButton = document.querySelector(".modal-map-close-button");

let buyPopup = document.querySelector(".modal-cart-added");
let buyButtons = document.querySelectorAll(".buy-button");
let buyCloseButton = document.querySelector(".modal-cart-added-close-button");

let circleSwitches = document.querySelectorAll(".slider-switch");
let promoSliders = document.querySelectorAll(".slider");


//map popup

if (mapPopup) {
    mapButton.addEventListener("click", function () {
        mapPopup.classList.add("modal-map--show");
    })

    mapCloseButton.addEventListener("click", function () {
        mapPopup.classList.remove("modal-map--show");
    })
}

//buy popup

let openBuyPopup = function (elem) {
    elem.addEventListener("click", function () {
        buyPopup.classList.add("modal-cart-added--show");
    });
}

if (buyPopup) {
    for (let i = 0; i < buyButtons.length; i++) {
        openBuyPopup(buyButtons[i]);
    }

    buyCloseButton.addEventListener("click", function () {
        buyPopup.classList.remove("modal-cart-added--show");
    })
}

// promo slider

let togglePromoSlider = function (elem) {
    elem.addEventListener("click", function () {
        for (let i = 0; i < circleSwitches.length; i++) {
            circleSwitches[i].classList.remove("active");
            promoSliders[i].classList.remove("active");
        }
        let circleSwitchesArray = Array.prototype.slice.call(circleSwitches);
        let sliderIndex = circleSwitchesArray.indexOf(elem);
        elem.classList.add("active");
        promoSliders[sliderIndex].classList.add("active");
    });
}

for (let i = 0; i < circleSwitches.length; i++) {
    togglePromoSlider(circleSwitches[i]);
}