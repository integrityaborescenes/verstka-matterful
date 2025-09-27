const slider2 = document.querySelector('.mainObject7')
const before2 = slider2.querySelector('.before')
const beforeImage2 = before2.querySelector('img')
const change2 = slider2.querySelector('.change')
const body2 = document.body
const beforeLabel2 = document.querySelector('.beforeLabel2')
const afterLabel2 = document.querySelector('.afterLabel2')
let isActive2 = false

const beforeAfterSlider2 = (x) => {
    let sdvig2 = Math.max(0, Math.min(x, slider2.offsetWidth))
    before2.style.width = `${sdvig2}px`
    change2.style.left = `${sdvig2}px`
    const leftThreshold2 = slider2.offsetWidth * 0.3;
    const rightThreshold2 = slider2.offsetWidth * 0.7;

    if (x < leftThreshold2) {
        beforeLabel2.style.opacity = "0";
    } else {
        beforeLabel2.style.opacity = "1";
    }

    if (x > rightThreshold2) {
        afterLabel2.style.opacity = "0";
    } else {
        afterLabel2.style.opacity = "1";
    }
}

const pauseEvents2 = (b) => {
    b.preventDefault()
    b.stopPropagation()
}

body2.addEventListener('pointerup', () => {
    isActive2 = false;
})

slider2.addEventListener('pointerdown', () => {
    isActive2 = true;
})

body2.addEventListener('pointerleave', () => {
    isActive2 = false;
})

slider2.addEventListener('pointermove', (b) => {
    if (!isActive2) {
        return
    }

    let x = b.pageX
    x -= slider2.getBoundingClientRect().left
    beforeAfterSlider2(x)
})
