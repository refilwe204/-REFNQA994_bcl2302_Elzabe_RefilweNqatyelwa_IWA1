const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

// Create an object for Leo with his personal information
const leo = {
	name: leoName,
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: { // nested the address
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal,
	},
};

// Create an object for sarah with her personal information
const sarah = {
	// trim to close the space all together
	// double quotes to create a single white space
	name: sarahName.trim() + " " + sarahSurname,
	balance: sarahBalance,
    accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
    age: 62,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,
	},
};

// Log the values of Leo and Sarah's objects as well as their postal code
console.log(leo, leo.address.postalCode);
console.log(sarah, sarah.address.postalCode);