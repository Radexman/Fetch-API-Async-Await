const pickerBox = document.querySelector('.picker-box');
let number = Math.floor(Math.random() * 5 + 1);

const changeSlide = () => {
	number++;
	if (number > 5) {
		number = 1;
	}

	let file = `<img src="images/pic${number}.jpg" class="slide" />`;

	document.querySelector('.slide-box').innerHTML = file;

	setTimeout(changeSlide, 5000);
};

changeSlide();

pickerBox.addEventListener('click', (e) => {
	let number = e.target.textContent;
	let file = `<img src="images/pic${number}.jpg" class="slide" />`;
	document.querySelector('.slide-box').innerHTML = file;
});
