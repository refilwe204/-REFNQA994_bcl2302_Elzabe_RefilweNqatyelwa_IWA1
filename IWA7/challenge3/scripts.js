// Define variables for Sarah's information
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

// Define variables for Sarah's information
const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'


// Define a divider to use in the output
const divider = '----------------------------------'

// Only change below this line


const owed =  (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2)

const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`

const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`

const total = "  Total amount owed: R "

const result = `${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n${divider}`;

console.log(result)