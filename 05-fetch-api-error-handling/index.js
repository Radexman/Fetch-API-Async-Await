// ============= 05 Fetch API Error Handling ============== //

// fetch('http://httpstat.us/200')
// 	.then((res) => {
// 		return res;
// 	})
// 	.then(() => console.log('sucess'));

fetch('http://httpstat.us/404')
	.then((res) => {
		return res;
	})
	.then(() => console.log('sucess'));
