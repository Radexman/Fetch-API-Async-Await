const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
	fetch(apiUrl + '?_limit=10')
		.then((res) => res.json())
		.then((data) => {
			renderTodos(data);
		});
};

const renderTodos = (object) => {
	object.forEach((task) => {
		const div = document.createElement('div');
		const divText = document.createTextNode(task.title);
		div.appendChild(divText);
		document.querySelector('#todo-list').appendChild(div);
	});
};

getTodos();
