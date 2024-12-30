let timerInterval;
let time = 3600; // Set to 1 hour (3600 seconds)

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById('timer-display').textContent = "Time's up!";
            alert("Dance session complete!");
            return;
        }

        time--;
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        document.getElementById('timer-display').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval); // Stop the timer if running
    timerInterval = null; // Clear interval reference
    time = 3600; // Reset time to 1 hour
    document.getElementById('timer-display').textContent = "01:00:00"; // Reset display
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer); // Reset functionality