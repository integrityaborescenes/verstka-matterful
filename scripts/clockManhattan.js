const clockM = document.querySelector('.clockM')
const hourHandM = clockM.querySelector('.hour-handM')
const minuteHandM = clockM.querySelector('.minute-handM')

const currentTimeM = () => {
    let date = new Date()
    const currentMDate = Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    })
    const currentMTime = currentMDate.formatToParts(date)

    let hoursM = +parseInt(currentMTime.find(p => p.type === "hour").value)
    let minutesM = +parseInt(currentMTime.find(p => p.type === "minute").value)

    let minutesGradusM = ((360 / 60) * minutesM) - 90
    let hoursGradusM = ((360 / 12) * hoursM) + ((360 / 12 / 60) * minutesM) - 90
    hourHandM.style.transform = `rotate(${hoursGradusM}deg)`
    minuteHandM.style.transform = `rotate(${minutesGradusM}deg)`
    console.log(hoursM, hoursGradusM)
    console.log(minutesM, minutesGradusM)
}

setInterval(currentTimeM,1000)



