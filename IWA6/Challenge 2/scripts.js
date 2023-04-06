const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

// Check if hourOfDay and minuteOfDay are defined and it is midnight
if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
 
 // Convert tax percentage to a decimal
  const taxAsDecimal = parseInt(tax) / 100;

// Calculate balance after tax deduction
  const startingAfterTax = salary *(1- taxAsDecimal);

// Calculate balance after deducting expenses
  const balance = startingAfterTax - transport - food - rent;
  
 // Log the balance with the R symbol and 2 decimal places
  console.log('R' + balance.toFixed(2));
}
