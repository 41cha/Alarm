function updateClock() {

    let now = new Date();
    let global_hours = String(now.getHours()).padStart(2, '0');
    let global_minutes = String(now.getMinutes()).padStart(2, '0');
    let global_seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${global_hours}:${global_minutes}:${global_seconds}`;

    alarmCheck(global_hours, global_minutes);
}

function setAlarm(hours, minutes = 0) {
    localStorage.setItem('hours', String(hours).padStart(2, '0'));
    localStorage.setItem('minutes', String(minutes).padStart(2, '0'));
}

function alarmCheck(currentHours, currentMinutes) {
    let savedHours = localStorage.getItem('hours');
    let savedMinutes = localStorage.getItem('minutes');

    if (savedHours === currentHours && savedMinutes === currentMinutes) {

        const audio = new Audio('alarm.mp3');
        audio.play().then(r => alert('Alarm time!'));


        localStorage.removeItem('hours');
        localStorage.removeItem('minutes');
    }
}

document.getElementById('setAlarmBtn').addEventListener('click', () => {
    let alarm_hours = document.getElementById('hours').value;
    let alarm_minutes = document.getElementById('minutes').value;

    if (alarm_hours && alarm_minutes) {
        setAlarm(alarm_hours, alarm_minutes);
    }
});


updateClock();
setInterval(updateClock, 1000);



