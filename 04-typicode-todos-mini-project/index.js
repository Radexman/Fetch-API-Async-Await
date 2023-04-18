const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
	fetch(apiUrl + '?_limit=8')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((task) => {
				const div = document.createElement('div');
				div.appendChild(document.createTextNode(task.title));
				div.setAttribute('data-id', task.id);

				if (task.completed) {
					div.classList.add('done');
				}

				document.querySelector('#todo-list').appendChild(div);
			});
		});
};

const appInit = () => {
	window.addEventListener('DOMContentLoaded', getTodos);
};

appInit();
