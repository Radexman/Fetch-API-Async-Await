// ==================== 03 Fetch Options =================== //

const createPost = ({ title, body }) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			'Content-Type': 'application/json',
			token: 'abd123',
		},
	});
};
