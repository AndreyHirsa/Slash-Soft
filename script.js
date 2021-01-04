"use strict"

const buttonBack = document.querySelector(".button__back");
const buttonNext = document.querySelector(".button__next")
const solutionTitle = document.querySelector(".solution_title");
const slider = document.querySelector(".slider_container");

let solutionTitleValues = ["Food Delivery", "Women's Clothing Webstore", "Furniture Constructor"];

let solutionTitleCurrentValue = 0;
let translateValue = "1100";

buttonBack.setAttribute("disabled", "disabled");

buttonNext.addEventListener("click", () => {
    solutionTitleCurrentValue++;
    if(buttonBack.hasAttribute("disabled")){
        buttonBack.removeAttribute("disabled")
    }
    solutionTitle.textContent = solutionTitleValues[solutionTitleCurrentValue % 3]
    slider.style.transform = `translateX(-${translateValue * solutionTitleCurrentValue}px)`
    if (solutionTitleCurrentValue === 2) {
        buttonNext.setAttribute("disabled", "disabled")
    }
})

buttonBack.addEventListener("click", () => {
    if(buttonNext.hasAttribute("disabled")){
        buttonNext.removeAttribute("disabled")
    }
    solutionTitleCurrentValue--;
    solutionTitle.textContent = solutionTitleValues[solutionTitleCurrentValue % 3]
    if (solutionTitleCurrentValue === 0) {
        buttonBack.setAttribute("disabled", "disabled")
        slider.style.transform = `translateX(0)`
    } else {
        slider.style.transform=`translateX(-${translateValue * solutionTitleCurrentValue}px)`
    }
})

