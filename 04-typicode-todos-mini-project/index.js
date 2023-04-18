const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
	fetch(apiUrl + '?_limit=5')
		.then((res) => res.json())
		.then((data) => {
			renderTodos(data);
		});
};

const renderTodos = (tasks) => {
	tasks.forEach((task) => {
		const div = document.createElement('div');
		const divText = document.createTextNode(task.title);
		div.appendChild(divText);
		div.setAttribute('data-id', 'task.id');

		if (task.completed) {
			div.classList.add('done');
		}

		document.querySelector('#todo-list').appendChild(div);
	});
};

const renderItemToDOM = (data) => {
	const div = document.createElement('div');
	const divText = document.createTextNode(data.title);
	div.appendChild(divText);
	div.setAttribute('data-id', 'task.id');
	document.querySelector('#todo-list').appendChild(div);
};

const createTodo = (e) => {
	e.preventDefault();

	const newTodo = {
		title: e.target.firstElementChild.value,
		completed: false,
	};

	fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify(newTodo),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => {
			renderItemToDOM(data);
		});
};

const init = () => {
	document.addEventListener('DOMContentLoaded', getTodos());
	document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
