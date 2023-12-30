const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
  const span = document.createElement('span');
  span.style.setProperty('--index', i);
  const p = document.createElement('p');
  p.textContent = i;
  span.appendChild(p);
  numberElement.push(span);
}

numberHours.append(...numberElement);

for (let i = 1; i <= 60; i++) {
  const span = document.createElement('span');
  span.style.setProperty('--index', i);
  const p = document.createElement('p');
  p.textContent = i;
  span.appendChild(p);
  barElement.push(span);
}

barSeconds.append(...barElement);

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector('.hand.hours');
  const minuteHand = document.querySelector('.hand.minutes');
  const secondHand = document.querySelector('.hand.seconds');

  const hourDeg = (hours + minutes / 60) * 360 / 12;
  const minuteDeg = (minutes + seconds / 60) * 360 / 60;
  const secondDeg = seconds * 360 / 60;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Set up an interval to update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial update
