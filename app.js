const daysHTML = document.getElementById("days");
const hoursHTML = document.getElementById("hours");
const minsHTML = document.getElementById("mins");
const secondsHTML = document.getElementById("seconds");
const currentHTML = document.getElementById("current");
const containerCount = document.getElementsByClassName(".container-count");

const dayD = "3 september 2021";

function countdown() {
    const dayDDate = new Date(dayD);
    const currentDate = new Date();

    if (dayDDate < currentDate){
        daysHTML.innerHTML = "00";
        hoursHTML.innerHTML = "00";
        minsHTML.innerHTML = "00";
        secondsHTML.innerHTML = "00";
        currentHTML.innerHTML = currentDate;
    }else {
        const totalSeconds = (dayDDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds/3600/24);
        const hours = Math.floor(totalSeconds/3600) % 24;
        const minutes = Math.floor(totalSeconds/60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysHTML.innerHTML = days;
        hoursHTML.innerHTML = formateTime(hours);
        minsHTML.innerHTML = formateTime(minutes);
        secondsHTML.innerHTML = formateTime(seconds);
        currentHTML.innerHTML = dayD;
    }
}

function formateTime(time) {
    if (time < 10) {
        return `0${time}`;
    }else {
        return time;
    }
}

countdown();
setInterval(countdown,1000);

console.log(Date());
if(containerCount.classList){
    containerCount.classList.add("change-display");
}

