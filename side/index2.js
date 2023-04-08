const showRangeButton = document.querySelector('#show-range-button');
const div = document.createElement('div');
const arr = [];

const showNumberRange = (e) => {
	const firstNumber = document.querySelector('#first-number').value;
	const lastNumber = document.querySelector('#last-number').value;
	e.preventDefault();

	createArray(firstNumber, lastNumber);

	div.innerHTML = '';
	displayContent(arr);
};

const createArray = (numOne, numTwo) => {
	if (numOne > numTwo) {
		alert('First number has to be smaller than second number');
		return;
	} else {
		let x = Number(numOne);
		let y = Number(numTwo);

		let i = x;
		while (x <= y) {
			arr.push(x);
			x++;
		}
	}
};

const displayContent = (content) => {
	const divText = document.createTextNode(content);
	div.appendChild(divText);
	document.querySelector('form').appendChild(div);
};

showRangeButton.addEventListener('click', showNumberRange);
