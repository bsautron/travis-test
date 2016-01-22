class Docs {
	constructor(max) {
		this.max = max;
		this.users = [];
	}

	add(name, age) {
		this.users.push({name, age});
	}

	del(name) {
		console.log('No please');
	}
};
