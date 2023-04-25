// =================== 01 Fetch Basics ==================== //

const getData = async () => {
	const res = await fetch('movies.json');
	const data = await res.json();

	logData(data);
};

const getText = () => {
	fetch('text.txt')
		.then((res) => res.text())
		.then((data) => console.log(data));
};

const getUser = async () => {
	const res = await fetch('https://randomuser.me/api/');
	const data = await res.json();

	// console.log(data.results[0]);
	displayUser(data.results[0]);
};

const displayUser = (user) => {
	const img = document.createElement('img');
	img.setAttribute('src', `${user.picture.medium}`);
	document.body.appendChild(img);

	const h2 = document.createElement('h2');
	h2.appendChild(document.createTextNode(`${user.name.first} ${user.name.last}`));
	document.body.appendChild(h2);
};

const logData = (data) => {
	data.forEach((obj) => {
		console.log(`Movie title: ${obj.title}, year: ${obj.year}.`);
	});
};

getData();

getText();

getUser();
