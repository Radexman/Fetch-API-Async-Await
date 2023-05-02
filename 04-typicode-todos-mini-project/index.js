const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async (url) => {
	const res = await fetch(`${url}?_limit=5`);
	const data = await res.json();

	data.forEach((todo) => addTodoToDOM(todo));
};

const addTodoToDOM = (todo) => {
	const div = document.createElement('div');
	div.appendChild(document.createTextNode(todo.title));
	div.setAttribute('data-id', todo.id);

	if (todo.completed) {
		div.classList.add('done');
	}

	document.querySelector('#todo-list').appendChild(div);
};

const createTodo = async (e) => {
	e.preventDefault();

	const post = {
		title: e.target.firstElementChild.value,
		completed: false,
	};

	const res = await fetch(apiURL, {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();

	addTodoToDOM(data);
};

const appInit = () => {
	document.addEventListener('DOMContentLoaded', getTodos(apiURL));
	document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

appInit();
