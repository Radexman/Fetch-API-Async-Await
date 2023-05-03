// ===================== 06 Async Await ==================== //
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

document.querySelector('button').addEventListener('click', getUsers);
