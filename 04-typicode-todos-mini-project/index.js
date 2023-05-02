const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async (url) => {
	const res = await fetch(`${url}?_limit=5`);
	const data = await res.json();

	console.log(data);
};

const appInit = () => {
	document.body.addEventListener('DOMContentLoaded', getTodos(apiURL));
};

appInit();
