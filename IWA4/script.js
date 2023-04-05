// Use a let keyword to declare a constant value
let date= 2050;
let stats = 'student';// it can be changed to parent so that the status is true
let count = 0; 

if (date === 2050) { 
	// Display holidays that occur in the first half of the year
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	console.log("April", 'Family Day'); 
	console.log("April", 'Freedom Day'); 
	count += 4; 

	if (stats == "student") {
		// If the person is a student, display the Youth Day holiday and increment the count
		console.log('June', 'Youth Day');
		count += 1;
	}

	// Display holidays that occur in the second half of the year
	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	console.log('December', 'Day of Reconciliation');
	count += 3;

	if (stats === "parent") {
		// If the person is a parent, display the Christmas Day holiday and increment the count
		console.log('December', 'Christmas Day');
		count += 1;
	}

	// Display the Day of Goodwill holiday and increment the count
	console.log('December', 'Day of Goodwill');
	count += 1;
}