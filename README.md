# FastAPIAlarm
```JavaScript
function alarmCheck(currentHours, currentMinutes) {
    let savedHours = localStorage.getItem('hours');
    let savedMinutes = localStorage.getItem('minutes');

    if (savedHours === currentHours && savedMinutes === currentMinutes) {
        
        let audio = new Audio('alarm.mp3');
        audio.play();
        
        alert('Час будильника!'); 
    }
}
```