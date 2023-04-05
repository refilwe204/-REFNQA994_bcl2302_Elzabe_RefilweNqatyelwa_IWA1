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

// Calculate the total amount owed
const owed =  (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2)
//  string for Leo's information, with the name, surname, and balance
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`
// string for Sarah's information, with the name, surname, and balance
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`
// string for the total amount owed
const total = "  Total amount owed: R "

// Combine the strings into a final output string
const result = `${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n${divider}`;

console.log(result)