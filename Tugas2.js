const name = [
	'Abigail',
	'Alexandra',
	'Alison',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'Carolyn',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope',
];

function searchName(char, limit, myCallBack) {
	//convert char input to lowercase
	newChar = char.toLowerCase();

	//convert data name to lowecase
	lowerCase = name.map(function (x) {
		return x.toLowerCase();
	});

	//filter data name with char input
	filtered = lowerCase.filter(function (key) {
		return key.includes(newChar);
	});

	//limit filtered data to only 3
	fix = filtered.slice(0, limit);

	//process to function
	myCallBack();
}

function callBack() {
	//convert data name back to normal (with first character in uppercase)
	upperCase = fix.map(function (y) {
		return y.charAt(0).toUpperCase() + y.slice(1);
	});
	console.log(upperCase);
}

searchName('an', 3, callBack);
