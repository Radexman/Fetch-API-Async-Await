const displayTimer = () => {
	setInterval(() => {
		const date = new Date();
		const currentHour = date.getHours();
		const currentMinute = date.getMinutes();
		const currentSeconds = date.getSeconds();
		const fullHour = `${currentHour}:${currentMinute}:${currentSeconds}`;
		document.querySelector('#timer').textContent = fullHour;
	}, 1000);
};

displayTimer();
