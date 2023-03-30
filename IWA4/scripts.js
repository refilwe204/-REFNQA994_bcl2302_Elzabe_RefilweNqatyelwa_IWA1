let date =2050;
let status = 'student';
let count = 0;

if (date === 2050) { 
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	console.log("April", 'Family Day'); 
	console.log("April", 'Freedom Day'); 
	count += 4; 


	if (status === "student") {
		console.log('June', 'Youth Day');
		count += 1;
	}

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	console.log('December', 'Day of Reconciliation');
	count += 3;

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)