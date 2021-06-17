//5 method bawaan JS

//1. toPrecision ()

const num = 7.23455;

numPrecision = num.toPrecision(3);
//console.log(numPrecision);

//2. concat()

let str1 = 'budi';
let str2 = 'bermain';
let str3 = 'bola';

newStr1 = str1.concat(str2);
newStr2 = newStr1.concat(str3);
//console.log(newStr2);

//3. map()

let arr = [2, 3, 4];
const newArr = arr.map(function (num) {
	return num * 10;
});

console.log(newArr);

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

const getFullName = players.map(function (name) {
	return [name.firstName, name.lastName].join(' ');
});
console.log(getFullName);

//4. sort()

let arr2 = ['red', 'blue', 'green', 'yellow', 'purple'];
sortedArr = arr2.sort();
console.log(sortedArr);

//5. slice()
let par = 'roses are red, violets are blue';
slicedPar = par.slice(3, -4);
console.log(slicedPar);
