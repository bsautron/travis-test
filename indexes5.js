function Docs(max) {
	this.max = max;
}

Docs.prototype.add = function(name, age) {
	this.users.push({name: name, age: age});
};

Docs.prototype.del = function(name) {
	console.log('No please');
};

module.exports = Docs;

var dd = new Docs(234);
