const sliderblock = document.querySelector('.mainobject10')
const firstSlide = sliderblock.querySelector('.slider')
const secondSlide = sliderblock.querySelector('.slider2')
const buttonNext = sliderblock.querySelector('.slidernext')
const buttonBack = sliderblock.querySelector('.sliderback')
let currentSlide = 1;
let isClick = false;

const switchBlock = (num) => {
    if (num === 1) {
        secondSlide.style.display = "none"
        firstSlide.style.display = "block"
        buttonBack.style.visibility = "hidden"
        buttonNext.style.visibility = "visible"
    } else {
        secondSlide.style.display = "block"
        firstSlide.style.display = "none"
        buttonNext.style.visibility = "hidden"
        buttonBack.style.visibility = "visible"
    }
}

buttonNext.addEventListener('click', () => {
    currentSlide = 2
    switchBlock(currentSlide)
})

buttonBack.addEventListener('click', () => {
    currentSlide = 1
    switchBlock(currentSlide)
})

switchBlock(currentSlide)
