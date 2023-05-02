// ==================== 03 Fetch Options =================== //

const url = 'https://jsonplaceholder.typicode.com/posts';

const createPost = async (url, { title, body }) => {
	const res = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();

	renderPost(data);
};

const renderPost = (post) => {
	const div = document.createElement('div');
	div.innerHTML = `<h1>${post.title}</h1>
	<p>${post.body}</p>`;

	document.body.appendChild(div);
};

createPost(url, { title: 'Post One', body: 'Post Two Body' });
