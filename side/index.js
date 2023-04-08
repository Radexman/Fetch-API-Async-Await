// Get value of input on button click
// Chceck if value is bigger, lesser or equal to 0
// Display propper message on the screen

const checkBtn = document.querySelector('#check-btn');
const p = document.createElement('p');

const checkValue = (e) => {
	e.preventDefault();
	const inputValue = document.querySelector('#number-value').value;
	const number = Number(inputValue);

	p.innerHTML = '';
	checkNumber(number);
};

const checkNumber = (num) => {
	let msg;

	if (num > 0) {
		msg = 'Number is bigger than 0';
	} else if (num < 0) {
		msg = 'Number is less than 0';
	} else if (num === 0) {
		msg = 'Number is 0';
	} else {
		msg = 'Please enter a number';
	}

	const pText = document.createTextNode(msg);
	p.appendChild(pText);
	document.querySelector('form').appendChild(p);
};

checkBtn.addEventListener('click', checkValue);
