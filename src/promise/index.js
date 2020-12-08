const sometimesWillHappen = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey!');
		} else {
			reject('Whoooops!');
		}
	});
};

const sometimesWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => {
				resolve('True');
			}, 2000);
		} else {
			const error = new Error('Whopps!!');
			reject(error);
		}
	});
};

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.error(error);
	});
