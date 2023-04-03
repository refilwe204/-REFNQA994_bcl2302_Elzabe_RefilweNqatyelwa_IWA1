const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/* check if the string contains of only digits
Used the test() to check if the string contains only digits
'^' the hat symbol is used to match the beginning of the code 
The 'd' represents any digits
The '+' represents one or more occurrences
'$' represents the end of the string
The whole expression matches string that contain one or more digits
*/

const primaryValid = /^\d+$/.test(primaryPhone)
const secondaryValid = /^\d+$/.test(secondaryPhone)

// Check if primary phone number is a valid numerical string and log the result
console.log('Primary phone is valid numerical string:', primaryValid)

// Check if secondary phone number is a valid numerical string and log the result
console.log('Secondary phone is valid numerical string:', secondaryValid )