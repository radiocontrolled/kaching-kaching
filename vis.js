var first, second, amount, result;
var currencyPair = [];

// defaults
fx.settings = {
	from : "GBP",
	to : "USD"
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
var selectCurrencies = function(){
	currencyPair[0] = first.value;
	currencyPair[1] = second.value;
	return currencyPair;
};


// convert one currency's value to another
function convertCurrencies(amountToConvert, pairOfCurrencies){
	fx.settings = { from: pairOfCurrencies[0], to: pairOfCurrencies[1] };
	result = fx.convert(amountToConvert, pairOfCurrencies);
}


var currencyInputForm = document.getElementById("currencyInputForm");

currencyInputForm.addEventListener("submit", function(event){
	event.preventDefault();
	amount = document.getElementById("amountInput");
	amount = amount.value;
	var pair = selectCurrencies();
	convertCurrencies(amount,pair);
	displayRates();
});


// display converted rate to end user 
var displayRates = function(){
	var display = document.getElementById("display");
	display.innerHTML = null;
	var textToDisplay = document.createTextNode(result);
	display.appendChild(textToDisplay);	
};


/* function: defaults 
 when application loads, display 1 USD to 1 GBP conversion rate. 
 * */ 


