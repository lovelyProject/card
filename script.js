"use strict"

let currentSlide = 0
const listSlides = document.getElementById("slider");
let topSlider = [...listSlides.children];
let topSliderDots = [...document.getElementById("topDots").children];
const popup = document.getElementById("popup-item");
const popupContainer = popup.closest('.popup-container');
const body = document.body
const bottomSlides = document.querySelectorAll(".bottom-slider-item img");

function showSlide(n) {
    currentSlide = n;
    let currentItem = topSlider[n];
    
    topSlider.forEach(elem => {
        elem.style.display = "none";
    })

    currentItem.style.display = "block"

    topSliderDots.forEach(elem => {
        elem.classList.remove("dot-active")
    })

    topSliderDots[n].classList.add("dot-active");
}

showSlide(currentSlide);

listSlides.addEventListener('click', zoom);

function zoom(event) {
    body.classList.add("overflow");
    let item = event.target.cloneNode(true);
    event.stopImmediatePropagation()
    item.classList.remove("slider-photo")
    popup.appendChild(item);
    popupContainer.classList.add("popup-active");
    item.style.cursor = "zoom-out";
    
    popupContainer.addEventListener('click', function(e){     
        if (e.target == item){
            popupContainer.classList.remove("popup-active");
            popup.removeChild(item);
            body.classList.remove("overflow")
        } else {
            popupContainer.classList.remove("popup-active");
            popup.removeChild(item);
            body.classList.remove("overflow");
        }
    });
}

bottomSlides.forEach(elem => {
    elem.addEventListener('click', zoom);
})