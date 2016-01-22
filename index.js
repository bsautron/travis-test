export default class Docs {
	constructor(max = 10) {
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

let dd = new Docs();
