let timerInterval;
let time = 0;

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timer-display').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timerInterval) startTimer();
});
