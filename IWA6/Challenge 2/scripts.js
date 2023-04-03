const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

// Check if it's midnight and if minuteOfDay has been set
// Also check if hourOfDay is 0 and minuteOfDay is 0
if (hourOfDay === 0 && minuteOfDay !== null && hourOfDay == 0 && minuteOfDay == 0 ) {
 
 // Convert tax to a decimal
  const taxAsDecimal = parseInt(tax) / 100;

// Calculate salary after tax
  const startingAfterTax = salary - salary * taxAsDecimal;

// Calculate balance after deducting transport, food, and rent
  const balance = startingAfterTax - transport - food - rent;
  
// Print the balance to the console with a 'R' prefix 
  console.log('R' + balance.toFixed(2));
}
