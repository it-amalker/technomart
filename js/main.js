let mapPopup = document.querySelector(".modal-map");
let mapButton = document.querySelector(".open-modal-write-us");
let mapCloseButton = document.querySelector(".modal-map-close-button");

let buyPopup = document.querySelector(".modal-cart-added");
let buyButtons = document.querySelectorAll(".buy-button");
let buyCloseButton = document.querySelector(".modal-cart-added-close-button");

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

var openBuyPopup = function (elem) {
    elem.addEventListener("click", function () {
        buyPopup.classList.add("modal-cart-added--show");
    });
}

if (buyPopup) {
    for (var i = 0; i < buyButtons.length; i++) {
        openBuyPopup(buyButtons[i]);
    }

    buyCloseButton.addEventListener("click", function () {
        buyPopup.classList.remove("modal-cart-added--show");
    })
}
