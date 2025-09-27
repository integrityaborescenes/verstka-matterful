const slider = document.querySelector('.mainObject3')
const before = slider.querySelector('.before')
const beforeImage = before.querySelector('img')
const change = slider.querySelector('.change')
const body = document.body
const beforeLabel = document.querySelector('.beforeLabel')
const afterLabel = document.querySelector('.afterLabel')

let isActive = false

const beforeAfterSlider = (x) => {
    let sdvig = Math.max(0, Math.min(x, slider.offsetWidth))
    before.style.width = `${sdvig}px`
    change.style.left = `${sdvig}px`
    const leftThreshold = slider.offsetWidth * 0.3;
    const rightThreshold = slider.offsetWidth * 0.7;

    if (x < leftThreshold) {
        beforeLabel.style.opacity = "0";
    } else {
        beforeLabel.style.opacity = "1";
    }

    if (x > rightThreshold) {
        afterLabel.style.opacity = "0";
    } else {
        afterLabel.style.opacity = "1";
    }
}

const pauseEvents = (b) => {
    b.preventDefault()
    b.stopPropagation()
}

body.addEventListener('pointerup', () => {
    isActive = false;
})

slider.addEventListener('pointerdown', () => {
    isActive = true;
})

body.addEventListener('pointerleave', () => {
    isActive = false;
})

slider.addEventListener('pointermove', (b) => {
    if (!isActive) {
        return
    }

    let x = b.pageX
    x -= slider.getBoundingClientRect().left
    beforeAfterSlider(x)
})
