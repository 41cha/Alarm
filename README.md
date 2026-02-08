# FastAPIAlarm

function alarmCheck(currentHours, currentMinutes) {
    let savedHours = localStorage.getItem('hours');
    let savedMinutes = localStorage.getItem('minutes');

    if (savedHours === currentHours && savedMinutes === currentMinutes) {
        // Створюємо аудіо
        let audio = new Audio('alarm.mp3'); // Вкажи шлях до свого звуку
        audio.play();
        
        alert('Час будильника!'); // Можна залишити або прибрати
    }
}
