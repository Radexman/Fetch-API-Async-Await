// ============= 08 Async Await Error Handling =========== //

// const getUsers = async () => {
// 	try {
// 		// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 		const res = await fetch('http://httpstat.us/404');

// 		if (res.status !== 200) {
// 			throw new Error('Something went wrong.');
// 		}

// 		const data = await res.text();

// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

const getPosts = async () => {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7');

		if (!res.ok) {
			throw new Error('Request Failed.');
		}

		const data = await res.json();

		renderPostsToDOM(data);
	} catch (error) {
		renderErrorMsg(error);
	}
};

const renderPostsToDOM = (posts) => {
	posts.forEach((post) => {
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(post.title));
		div.classList.add('post');
		document.querySelector('.posts').appendChild(div);
	});
};

const renderErrorMsg = (error) => {
	const p = document.createElement('p');
	p.appendChild(document.createTextNode(`Sorry, something went wrong: ${error}`));
	document.querySelector('.posts').appendChild(p);
};

getPosts();
