function updateClock() {

    let now = new Date();
    let global_hours = String(now.getHours()).padStart(2, '0');
    let global_minutes = String(now.getMinutes()).padStart(2, '0');
    let global_seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${global_hours}:${global_minutes}:${global_seconds}`;

    alarmCheck(global_hours, global_minutes);
}

function setAlarm(hours, minutes) {
    localStorage.setItem('hours', String(hours).padStart(2, '0'));
    localStorage.setItem('minutes', String(minutes).padStart(2, '0'));
}

function alarmCheck(currentHours, currentMinutes) {
    let savedHours = localStorage.getItem('hours');
    let savedMinutes = localStorage.getItem('minutes');

    if (savedHours === currentHours && savedMinutes === currentMinutes) {
        alert('Час будильника!');
    }
}

setAlarm(14, 26);

updateClock();
setInterval(updateClock, 1000);



