const clock = document.querySelector('.clock')
const hourHand = clock.querySelector('.hour-hand')
const minuteHand = clock.querySelector('.minute-hand')

const currentTime = () => {
    let date = new Date()
    const currentLSDate = Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    })
    const currentLSTime = currentLSDate.formatToParts(date)

    let hours = +parseInt(currentLSTime.find(p => p.type === "hour").value)
    let minutes = +parseInt(currentLSTime.find(p => p.type === "minute").value)

    let minutesGradus = ((360 / 60) * minutes) - 90
    let hoursGradus = ((360 / 12) * hours) + ((360 / 12 / 60) * minutes) - 90
    hourHand.style.transform = `rotate(${hoursGradus}deg)`
    minuteHand.style.transform = `rotate(${minutesGradus}deg)`
}

setInterval(currentTime,1000)



