const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

//////////////////////// POSITIONING THE CHARACTERS OF CLOCK ON A SIRCLE
for (let i = 1; i <= 12; i++) {
	let angle = (i + 9) * 30;
	// +9 makes the characters stay at the right position
	// i * 30 because 360 degree of a circle / 12 = 30 degree

	const element = document.createElement("div");
	element.textContent = i;
	element.classList.add("hour-character");
	clock.appendChild(element);

	element.style.setProperty("--angle", `${angle}deg`);
}
//////////////////////// UPDATING THE CLOCK HANDS EVERY SECOND
function updateClock() {
	const now = new Date();
	const hours = now.getHours() % 12; // 12 hours
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const hourDeg = hours * 30 + minutes * 0.5;
	// 360deg / 12 hours = 30deg. we need to calc minute effect on hour degree
	// 30 / 60 minutes = 0.5deg || hourDeg = hours * 30 + minutes * 0.5
	const minuteDeg = minutes * 6; // 360deg / 60 minutes = 6deg
	const secondDeg = seconds * 6;

	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
	secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
