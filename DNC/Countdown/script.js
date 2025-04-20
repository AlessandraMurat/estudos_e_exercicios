const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const launch = '30 oct 2022'


function countdow() {
    const launchDate = new Date(launch)
    const nowDate = new Date()

    const secTotal = (launchDate - nowDate)/1000

    const daysTotal = Math.floor(secTotal / 60 / 60 / 24);
    const hoursTotal = Math.floor(secTotal / 60 / 60) % 24 ;
    const minutesTotal = Math.floor(secTotal / 60 / 60) % 60;
    const secondsTotal = Math.floor(secTotal) % 60;

    day.innerHTML = formatTime(daysTotal);
    hour.innerHTML = formatTime(hoursTotal);
    minute.innerHTML = formatTime(minutesTotal);
    second.innerHTML = formatTime(secondsTotal);
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdow();
setInterval(countdow, 1000)