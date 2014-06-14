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


// convert one currency's value to another
function convertCurrencies(amountToConvert){
	var firstCurrency = document.getElementById("first-currency");
	firstCurrency = firstCurrency.value;
	var secondCurrency = document.getElementById("second-currency");
	secondCurrency = secondCurrency.value;
	fx.settings = { from: firstCurrency, to: secondCurrency };
	result = fx.convert(amountToConvert);	
}


var currencyInputForm = document.getElementById("currencyInputForm");

currencyInputForm.addEventListener("submit", function(event){
	event.preventDefault();
	amount = document.getElementById("amountInput");
	amount = amount.value;
	convertCurrencies(amount);
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

/* bug: issue converting currency after first submit, order of of currency pair not correct */
