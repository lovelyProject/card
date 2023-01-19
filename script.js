"use strict"

let currentSlide = 0
const listSlides = document.getElementById("slider");
let topSlider = [...listSlides.children];
let topSliderDots = [...document.getElementById("topDots").children];
const popup = document.getElementById("popup-item");
const popupContainer = popup.closest('.popup-container');
const body = document.body
const bottomSlides = document.querySelectorAll(".bottom-slider-item img");
const bottomSlider = document.getElementById("bottom-slider");
const bottomDots = document.getElementById("bottom-dots").children;
const toggleText = document.querySelectorAll(".main__toggle-text");
const toggleTitles = document.querySelectorAll(".main__toggle-title ");

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

function showBottomSlides(n) {
    bottomSlider.style.marginLeft = `-${40*n}rem`
    
    for (let elem of bottomDots){
        elem.classList.remove("dot-active");
    }

    bottomDots[n].classList.add("dot-active");
}

function switchToggle(n) {
    for (let elem of toggleTitles){
        elem.classList.remove("main__toggle-title_active");
    }
    toggleTitles[n].classList.add("main__toggle-title_active");
    for (let elem of toggleText){
        elem.style.display = "none";
    }

    toggleText[n].style.display = "block";
}

switchToggle(0)