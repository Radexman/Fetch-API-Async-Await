// ===================== 06 Async Await ==================== //

const form = document.querySelector('.form');
const personInput = document.querySelector('.name');
const usernameInput = document.querySelector('.username');

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'John', age: 20 });
	}, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
	const res = await promise;
	console.log(res);
}

// getPromise();

const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
	const data = await res.json();

	renderUsers(data);
};

const renderUsers = (users) => {
	users.forEach((user) => {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(user.name));
		div.classList.add('user');

		document.querySelector('#output').appendChild(div);
	});
};

const checkForm = async (e) => {
	e.preventDefault();
	const nameValue = personInput.value;
	const usernameValue = usernameInput.value;

	// Check for empty value
	if (!nameValue || !usernameValue) {
		alert('Please provide value');
		return;
	}

	const formData = new FormData(e.currentTarget);
	const user = Object.fromEntries(formData);

	console.log(user);

	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();

	renderSingleUser(data);

	personInput.value = '';
	usernameInput.value = '';
};

const renderSingleUser = (user) => {
	const div = document.createElement('div');
	const span = document.createElement('span');
	span.appendChild(document.createTextNode(user.username));
	div.appendChild(document.createTextNode(user.name));
	div.classList.add('user');
	div.appendChild(span);

	document.querySelector('#output').appendChild(div);
};

const initApp = () => {
	document.querySelector('.render-users').addEventListener('click', getUsers);
	form.addEventListener('submit', checkForm);
};

initApp();
