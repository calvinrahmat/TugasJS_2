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

let searchName = (char, limit, myCallBack) => {
	//convert char input to lowercase
	newChar = char.toLowerCase();

	//convert data name to lowecase
	lowerCase = name.map((x) => x.toLowerCase());

	//filter data name with char input
	filtered = lowerCase.filter((key) => key.includes(newChar));

	//limit filtered data to only 3
	fix = filtered.slice(0, limit);

	//process to function
	myCallBack();
};

const callBack = () => {
	//convert data name back to normal (with first character in uppercase)
	const upperCase = fix.map((y) => y.charAt(0).toUpperCase() + y.slice(1));
	console.log(upperCase);
};

searchName('an', 3, callBack);
