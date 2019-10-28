let mapPopup = document.querySelector(".modal-map");
let mapButton = document.querySelector(".map");
let mapCloseButton = document.querySelector(".modal-map-close-button");

let writeUsPopup = document.querySelector(".modal-write-us");
let writeUsButton = document.querySelector(".open-modal-write-us");
let writeUsCloseButton = document.querySelector(".modal-write-us-close-button");

let buyPopup = document.querySelector(".modal-cart-added");
let buyButtons = document.querySelectorAll(".buy-button");
let buyCloseButton = document.querySelector(".modal-cart-added-close-button");

let circleSwitches = document.querySelectorAll(".slider-switch");
let arrowSwitches = document.querySelectorAll(".slider-arrow");
let promoSliders = document.querySelectorAll(".slider");

let servicesSwitches = document.querySelectorAll(".services-item");
let servicesSliders = document.querySelectorAll(".services-slider");

//map popup

if (mapPopup) {
    mapButton.addEventListener("click", function () {
        mapPopup.classList.add("modal-map--show");
        mapPopup.classList.remove("modal-map--close");
    })

    mapCloseButton.addEventListener("click", function () {
        mapPopup.classList.remove("modal-map--show");
        mapPopup.classList.add("modal-map--close");
    })
}

//write-us popup

if (writeUsPopup) {
    writeUsButton.addEventListener("click", function () {
        writeUsPopup.classList.add("modal-write-us--show");
        writeUsPopup.classList.remove("modal-write-us--close");
    })

    writeUsCloseButton.addEventListener("click", function () {
        writeUsPopup.classList.remove("modal-write-us--show");
        writeUsPopup.classList.add("modal-write-us--close");
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

//promo slider and services slider

let toggleSliders = function (allSwitches, switchElement, allSliders, byArrows, switchesRelated) {
    switchElement.addEventListener("click", function (evt) {
        evt.preventDefault();
        for (let i = 0; i < allSwitches.length; i++) {
            allSwitches[i].classList.remove("active");
            allSliders[i].classList.remove("active");
            if (byArrows) {
                switchesRelated[i].classList.remove("active");
            }
        }
        let switchesArray = Array.prototype.slice.call(allSwitches);
        let sliderIndex = switchesArray.indexOf(switchElement);
        switchElement.classList.add("active");
        allSliders[sliderIndex].classList.add("active");
        if (byArrows) {
            switchesRelated[sliderIndex].classList.add("active");
        }
    });
}

let launchToggleSliders = function (switchesList, slidersList, arrowsFlag, switchesAdditional) {
    for (let i = 0; i < switchesList.length; i++) {
        toggleSliders(switchesList, switchesList[i], slidersList, arrowsFlag, switchesAdditional);
    }
}

launchToggleSliders(circleSwitches, promoSliders, true, arrowSwitches);
launchToggleSliders(arrowSwitches, promoSliders, true, circleSwitches);
launchToggleSliders(servicesSwitches, servicesSliders);
