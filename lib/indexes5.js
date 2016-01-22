/**
 * Represents a book.
 * @class
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Docs(max) {
	this.max = max;
	this.users = [];
}

/**
* Add a new user in this doc.
* @param {string} name - The user name.
* @param {number} age - His age.
*/
Docs.prototype.add = function(name, age) {
	this.users.push({name: name, age: age});
};

/**
* Delete this user from doc
* @param {string} name - The user name.
* @return {number} Return length user
*/
Docs.prototype.del = function(name) {
	console.log(name + ' please NO!');
	return this.users.length;
};

module.exports = Docs;

var dd = new Docs(234);

dd.del("Bruno");
