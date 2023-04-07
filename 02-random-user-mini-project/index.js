const generateUserButton = document.querySelector('#generate-user-button');
const userAvatar = document.querySelector('.profile-picture');
const userData = document.querySelector('.user-data');
const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userPhone = document.querySelector('.user-phone');
const userLocation = document.querySelector('.user-location');
const userAge = document.querySelector('.user-age');
const userGender = document.querySelector('.user-gender');

const displayRandomUser = () => {
	fetch('https://api.github.com/users')
		.then((res) => res.json())
		.then((user) => {
			const randomNumber = Math.floor(Math.random() * user.length);
			const randomUser = user[randomNumber];
			userAvatar.src = randomUser.avatar_url;
			userName.innerHTML = `<li> <strong>Name:</strong> ${randomUser.login}</li>`;
			userEmail.innerHTML = `<li> <strong>Email:</strong> ${randomUser.email} </li>`;
		});
};

generateUserButton.addEventListener('click', displayRandomUser);

fetch('https://api.github.com/users/Radexman')
	.then((res) => res.json())
	.then((data) => console.log(data));
