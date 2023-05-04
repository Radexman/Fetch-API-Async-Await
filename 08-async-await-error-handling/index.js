// ============== 08 Async Await Error Handling ============ //

const getUsers = async () => {
	try {
		// const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
		const data = await res.json();

		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getUsers();
