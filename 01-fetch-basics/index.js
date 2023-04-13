// =================== 01 Fetch Basics ==================== //

// Fetching a JSON file
fetch('movies.json')
	.then((res) => res.json())
	.then((data) => console.log(data));

// Fetching text file
fetch('text.txt')
	.then((res) => res.text())
	.then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/Radexman')
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		document.querySelector('h1').textContent = data.login;
		const avatar = document.createElement('img');
		avatar.src = data.avatar_url;
		avatar.style.borderRadius = '50%';
		document.body.appendChild(avatar);
		const anchor = document.createElement('a');
		anchor.href = data.blog;
		const anchorText = document.createTextNode('Visit my blog');
		anchor.appendChild(anchorText);
		document.body.appendChild(anchor);
	});
