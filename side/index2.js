const showRangeButton = document.querySelector('#show-range-button');
const div = document.createElement('div');

const showNumberRange = (e) => {
	e.preventDefault();
	const firstNumber = document.querySelector('#first-number').value;
	const lastNumber = document.querySelector('#last-number').value;

	if (firstNumber > lastNumber) {
		alert('First number has to be smaller than second number');
		return;
	} else {
		const arr = [];
		let x = Number(firstNumber);
		let y = Number(lastNumber);

		let i = x;
		while (x <= y) {
			arr.push(x);
			x++;
		}

		div.innerHTML = '';
		displayContent(arr);
	}
};

const displayContent = (content) => {
	const divText = document.createTextNode(content);
	div.appendChild(divText);
	document.querySelector('form').appendChild(div);
};

showRangeButton.addEventListener('click', showNumberRange);
