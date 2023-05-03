const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async (url) => {
	const res = await fetch(`${url}?_limit=5`);
	const data = await res.json();

	data.forEach((todo) => addTodoToDOM(todo));
};

const addTodoToDOM = (todo) => {
	const div = document.createElement('div');
	div.classList.add('todo');
	div.appendChild(document.createTextNode(todo.title));
	div.setAttribute('data-id', todo.id);

	if (todo.completed) {
		div.classList.add('done');
	}

	document.querySelector('#todo-list').appendChild(div);
};

const createTodo = async (e) => {
	e.preventDefault();

	const newTodo = {
		title: e.target.firstElementChild.value,
		completed: false,
	};

	const res = await fetch(apiURL, {
		method: 'POST',
		body: JSON.stringify(newTodo),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();

	addTodoToDOM(data);
};

const toggleCompleted = (e) => {
	if (e.target.classList.contains('todo')) {
		e.target.classList.toggle('done');

		updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
	}
};

const updateTodo = async (id, completed) => {
	const res = await fetch(`${apiURL}/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ completed }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.json();

	console.log(data);
};

const appInit = () => {
	document.addEventListener('DOMContentLoaded', getTodos(apiURL));
	document.querySelector('#todo-form').addEventListener('submit', createTodo);
	document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
};

appInit();
