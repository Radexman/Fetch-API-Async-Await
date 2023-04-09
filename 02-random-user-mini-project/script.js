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

	const p = createParagraph('text-xl');
	p.textContent = 'Hello';
	console.log(p);

	// Appending elements
	outerDiv.appendChild(img);
	outerDiv.appendChild(innerDiv);
	innerDiv.appendChild(p);
	wrapper.appendChild(outerDiv);
};

const createParagraph = (classes) => {
	const p = document.createElement('p');
	p.classList = classes;
	return p;
};

generateUserButton.addEventListener('click', displayUser);

/* <div class="flex">
	<img class="w-48 h-48 rounded-full mr-8" src="./user-picture.jpg" />
	<div class="space-y-3">
		<p class="text-xl">
			<span class="font-bold">Name: </span>Radosław Siek
		</p>
		<p class="text-xl">
			<span class="font-bold">Email: </span>Borderlandsmaniak@gmail.com
		</p>
		<p class="text-xl">
			<span class="font-bold">Phone: </span>666 666 666
		</p>
		<p class="text-xl">
			<span class="font-bold">Location: </span>Koszęcin, Polska
		</p>
		<p class="text-xl">
			<span class="font-bold">Age: </span>24
		</p>
	</div>
</div>; */
