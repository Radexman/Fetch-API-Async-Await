const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
	fetch(apiUrl + '?_limit=10')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((task) => {
				const div = document.createElement('div');
				div.classList.add('todo');
				div.appendChild(document.createTextNode(task.title));
				div.setAttribute('data-id', task.id);

				if (task.completed) {
					div.classList.add('done');
				}

				document.querySelector('#todo-list').appendChild(div);
			});
		});
};

const postTodo = (e) => {
	e.preventDefault();
	let inputValue = e.target.firstElementChild.value;

	if (!inputValue) {
		alert('Please type in todo');
	} else {
		const task = {
			title: inputValue,
			completed: false,
		};

		fetch(apiUrl, {
			method: 'POST',
			body: JSON.stringify(task),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				renderTodoToDOM(data);
			});
	}
};

const renderTodoToDOM = (task) => {
	const div = document.createElement('div');
	div.classList.add('todo');
	div.appendChild(document.createTextNode(task.title));
	div.setAttribute('data-id', task.id);
	document.querySelector('#todo-list').appendChild(div);
};

const toggleCompleted = (e) => {
	if (e.target.classList.contains('todo')) {
		e.target.classList.toggle('done');

		updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
	}
};

const updateTodo = (id, completed) => {
	fetch(`${apiUrl}/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ completed }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

const deleteTodo = (e) => {
	if (e.target.classList.contains('todo')) {
		const id = e.target.dataset.id;

		fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then(() => e.target.remove());
	}
};

const appInit = () => {
	window.addEventListener('DOMContentLoaded', getTodos);
	document.querySelector('#todo-form').addEventListener('submit', postTodo);
	document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
	document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

appInit();
