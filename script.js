const clock = document.querySelector(".clock");

for (let i = 1; i <= 12; i++) {
	let angle = (i + 9) * 30; // +9 makes the characters stay at the right position
	// i * 30 because 360 degree of a circle / 12 = 30 degree

	const element = document.createElement("span");
	element.textContent = i;
	element.classList.add("hour-character");

	element.style.transform = `rotate(${angle}deg) translate(325px) rotate(-${angle}deg)`;

	clock.appendChild(element);
}
