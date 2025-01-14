// Function to update the speed value in the speedometer
function updateSpeed(speed) {
    const speedElement = document.getElementById("speedValue");
    speedElement.textContent = Math.round(speed); // Update speed value
}

// Listen for the "updateSpeed" event from the server
mp.events.add("updateSpeed", (speed) => {
    updateSpeed(speed);
});

// Initialize with 0 speed
updateSpeed(0);
