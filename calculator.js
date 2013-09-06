/* Variables
	currency name(s)
	conversion rate
	countries
	input
*/

var currencyName1,
	currencyName2,
	countryName1,
	countryName2,
	amount1,
	amount2,
	conversionRate;

countryName1 = 'USA';
countryName2 = "India";
currencyName1 = "dollar";
currencyName2 = "rupee"
conversionRate = "66.01"

// Calculate conversion

// Capture button click
document.getElementById('calculateButton').onclick = function () {
	// get user input
	amount1 = document.getElementById('amount1').value;

	// calculate result
	amount2 = amount1 * conversionRate;

	// display result
	document.getElementById('amount2').value = amount2;
}
