let mapPopup = document.querySelector(".modal-map");
let mapButton = document.querySelector(".open-modal-write-us");
let mapCloseButton = document.querySelector(".modal-map-close-button");

mapButton.addEventListener("click", function () {
    mapPopup.classList.add("modal-map--show");
})

mapCloseButton.addEventListener("click", function () {
    mapPopup.classList.remove("modal-map--show");
})