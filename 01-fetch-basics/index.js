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
	.then((data) => (document.querySelector('h1').textContent = data.login));

// Fetching img
fetch('avatar.png')
	.then((res) => res.blob())
	.then((img) => {
		const image = document.createElement('img');
		image.src = URL.createObjectURL(img);
		document.body.appendChild(image);
	});
