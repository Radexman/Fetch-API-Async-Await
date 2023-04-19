// ====================== Async Await ===================== //

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;

		if (!error) {
			resolve('Success');
		} else {
			reject('Failure');
		}
	}, 1000);
});

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

async function getPromise() {
	const res = await promise;

	console.log(res);
}

// getPromise();

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	console.log(data);
}

// getUsers();

const getUsersTwo = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
	const users = await res.json();

	renderUsersToDOM(users);
};

const renderUsersToDOM = (users) => {
	users.forEach((user) => {
		const div = document.createElement('div');
		div.classList.add('user');
		div.appendChild(document.createTextNode(user.name));
		document.querySelector('#output').appendChild(div);
	});
};

const initApp = () => {
	document.querySelector('button').addEventListener('click', getUsersTwo);
};

initApp();
