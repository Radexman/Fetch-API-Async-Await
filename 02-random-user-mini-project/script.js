const generateUserButton = document.querySelector('#generate');
const wrapper = document.querySelector('.wrapper');

const displayUser = () => {
	wrapper.innerHTML = '';
	fetch('https://randomuser.me/api/')
		.then((res) => res.json())
		.then((data) => generateUserData(data.results[0]));
};

const generateUserData = (user) => {
	const outerDiv = document.createElement('div');
	outerDiv.classList = 'flex';

	const img = document.createElement('img');
	img.classList = 'w-48 h-48 rounded-full mr-8';
	img.src = user.picture.large;

	outerDiv.appendChild(img);
	wrapper.appendChild(outerDiv);
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
