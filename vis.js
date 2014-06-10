var first, second, amount;
var currencyPair = [];

// Using `fx.settings` (must be after loading the library)
fx.settings = {
	from : "GBP",
	to : "AED"
};

// Using `fxSetup` (must be before loading the library; see note)
var fxSetup = {
	from : "GBP",
	to : "AED"
};


/* populate the select elements' option values with currencies 
 * from the fx.rates object 
 */
function optionPopulator(element){
	for (var rate in fx.rates){
		if(fx.rates.hasOwnProperty){
			var opt = document.createElement("option");
			opt.value = rate;
			opt.text = rate;
			element.appendChild(opt);	
		}
	}
}

/* setup both select elements with currency values*/
var setup = function (){
	first = document.getElementById("first-currency");
	optionPopulator(first);
	second = document.getElementById("second-currency");
	optionPopulator(second);
}();


/* return an array, currencyPair, with the first and 
 * second currency collected */
function selectCurrencies(){
	currencyPair[0] = first.value;
	currencyPair[1] = second.value;
	return currencyPair;
}


var currencyInputForm = document.getElementById("currencyInputForm");

currencyInputForm.addEventListener("submit",function(event){
	event.preventDefault();
	var amount = document.getElementById("amountInput");
	return amount;
});

/* convertCurrencies
* this is the function that will convert one
* currency's value to another.
*
*/

function convertCurrencies(amount, pair){
	
//fx.settings = { from: "CAD", to: "GBP" };
//console.log(fx.convert(1000));
}


/* function: displayRates
* this function will display rates to the
* end user
*/
