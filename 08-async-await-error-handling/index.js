// ============== 08 Async Await Error Handling ============ //

const getUsers = async () => {
	try {
		const res = await fetch('http://httpstat.us/404');

		if (!res.ok) {
			throw new Error('Request Failed');
		}

		const data = await res.text();

		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

// getUsers();

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

	if (!res.ok) {
		throw new Error('Something went wrong.');
	}

	const data = await res.json();

	console.log(data);
};

getPosts();
