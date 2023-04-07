// =================== 01 Fetch Basics ==================== //

// Fetching a JSON file
fetch('movies.json')
	.then((response) => response.json())
	.then((data) => console.log(data));

// Fetching a text file
fetch('text.txt')
	.then((res) => res.text())
	.then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/Radexman')
	.then((res) => res.json())
	.then((data) => (document.querySelector('h1').textContent = data.login));
