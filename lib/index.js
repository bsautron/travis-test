/** Class representing a Doc. */
export default class Docs {
	/**
	* Create a doc.
	* @class
	* @param {number} max  - This is the maximum users.
	*/
	constructor(max = 10) {
		this.max = max;
		this.users = [];
	}

	/**
	* Add a new user in this doc.
	* @param {string} name - The user name.
	* @param {number} age - His age.
	*/
	add(name, age) {
		this.users.push({name, age});
	}

	/**
	* Delete this user from doc
	* @param {string} name - The user name.
	* @return {number} Return length user
	*/
	del(name) {
		console.log('No please');
		return this.users.length;
	}
};
