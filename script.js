// Script to handle both analog and digital clock updates
function updateClock() {
    const now = new Date();
    
    // Analog clock
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = (hours + minutes / 60) * 30; // 360/12
    const minuteDegree = (minutes + seconds / 60) * 6; // 360/60
    const secondDegree = seconds * 6; // 360/60

    // Update analog clock hands
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegree}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegree}deg)`;

    // Digital clock
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital-time').textContent = digitalTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
