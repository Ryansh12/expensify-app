/*
*	OBJECT DESTRUCTURING
*/

const person = {
	name: 'Pratik',
	age: 20,
	location: {
		city:'Pune',
		temp: 13
	} 
};
//setting up default for Name when it does not exist in person also renaming it to firstName
const { name: firstName = 'Anonymous', age } = person;
//this is equivalent to these two
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age} yrs old`);

//also storing temp in temperature and using
const { city, temp: temperature } = person.location;
if(city && temperature ) {
	console.log(`It's ${temperature} in ${city}.` );	
}


const book = {
	title: 'Ego is the enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(`${publisherName}`);


/*
* ARRAY DESTRUCTURING
*/

const address = ['kolhewadi','Pune','Maharashtra','411024'];
const [, place, state] = address;
console.log(`You are in ${place} ${state} `);


