const generateUserButton = document.querySelector('#generate');
const wrapper = document.querySelector('.wrapper');

const displayUser = () => {
	wrapper.innerHTML = '';
	fetch('https://randomuser.me/api/')
		.then((res) => res.json())
		.then((data) => generateUserData(data.results[0]));
};

const generateUserData = (user) => {
	// Create wrapper
	const outerDiv = document.createElement('div');
	outerDiv.classList = 'flex';

	// Create user avatar
	const img = document.createElement('img');
	img.classList = 'w-48 h-48 rounded-full mr-8';
	img.src = user.picture.large;

	// Inner wrapper
	const innerDiv = document.createElement('div');
	innerDiv.classList = 'space-y-3';

	// User name
	const pName = createParagraph('text-xl');
	pName.innerHTML = `<span class='font-bold'> Name: </span> ${user.name.first} ${user.name.last}`;

	// User email
	const pEmail = createParagraph('text-xl');
	pEmail.innerHTML = `<span class='font-bold'> Email: </span> ${user.email}`;

	// User phone
	const pPhone = createParagraph('text-xl');
	pPhone.innerHTML = `<span class='font-bold'> Phone: </span> ${user.phone}`;

	// User location
	const pLocation = createParagraph('text-xl');
	pLocation.innerHTML = `<span class='font-bold'> Location: </span> ${user.location.city}, ${user.location.state}, ${user.location.country}`;

	// User age
	const pAge = createParagraph('text-xl');
	pAge.innerHTML = `<span class='font-bold'> Age: </span> ${user.registered.age + 20}`;

	// Appending elements
	outerDiv.appendChild(img);
	outerDiv.appendChild(innerDiv);
	innerDiv.appendChild(pName);
	innerDiv.appendChild(pEmail);
	innerDiv.appendChild(pPhone);
	innerDiv.appendChild(pLocation);
	innerDiv.appendChild(pAge);
	wrapper.appendChild(outerDiv);
};

const createParagraph = (classes) => {
	const p = document.createElement('p');
	p.classList = classes;
	return p;
};

generateUserButton.addEventListener('click', displayUser);
