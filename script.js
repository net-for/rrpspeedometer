function updateSpeed(speed) {
    const needle = document.getElementById("needle");
    const speedDisplay = document.getElementById("speed");

    // Clamp the speed to a maximum value of 200
    const clampedSpeed = Math.min(speed, 200);
    const rotation = (clampedSpeed / 200) * 180 - 90;

    needle.style.transform = `rotate(${rotation}deg)`;
    speedDisplay.textContent = `${Math.round(speed)} km/h`;
}

// Simulated speed updates for testing (to be replaced by server updates)
setInterval(() => {
    const simulatedSpeed = Math.random() * 200;
    updateSpeed(simulatedSpeed);
}, 1000);
