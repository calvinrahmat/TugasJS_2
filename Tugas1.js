//5 method bawaan JS

//1. toPrecision ()

const num = 7.23455;

numPrecision = num.toPrecision(3);
console.log(`1. toPrecision() : ${numPrecision}`);

//2. concat()

let str1 = 'budi';
let str2 = 'bermain';
let str3 = 'bola';

newStr1 = str1.concat(str2);
newStr2 = newStr1.concat(str3);
console.log(`2. concat(): ${newStr2}`);

//3. map()

let players = [
	{
		firstName: 'calvin',
		lastName: 'rahmat',
	},
	{
		firstName: '슬기',
		lastName: 'kang',
	},
];

const getFullName = players.map((name) =>
	[name.firstName, name.lastName].join(' ')
);

console.log(`3. map() : ${getFullName}`);

//4. sort()

let arr2 = ['red', 'blue', 'green', 'yellow', 'purple'];
sortedArr = arr2.sort();
console.log(`4. sort(): ${sortedArr}`);

//5. slice()
let par = 'roses are red, violets are blue';
slicedPar = par.slice(3, -4);
console.log(`5. ${slicedPar}`);
