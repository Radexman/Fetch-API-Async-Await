// ==================== 03 Fetch Options =================== //

const createPost = (post) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: post.title,
			body: post.body,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};

createPost({ title: 'Post One', body: 'Post one body' });
