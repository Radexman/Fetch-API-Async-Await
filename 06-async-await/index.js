// ====================== Async Await ===================== //

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

// Fetch API with async/await
const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	console.log(data);
};

// getUsers();

// Fetch API with thanables

const getUsersTwo = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => console.log(data));
};

// getUsersTwo();

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
	const data = await res.json();

	console.log(data);
};

getPosts();
