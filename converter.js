var amount, result, displayFirst, displaySecond;

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

// display converted rate to end user 
var displayRates = function(amount){
	var display = document.getElementById("display");
	display.innerHTML = null;
	acronymToName();
	result = parseFloat(result);
	result = result.toFixed(2);
	amount = document.getElementById("amountInput");
	amount = amount.value;
	result = amount + " " + displayFirst + " equals " + result + " " + displaySecond;
	var textToDisplay = document.createTextNode(result);
	display.appendChild(textToDisplay);	
};


/* setup both select elements with currency values
 when application loads, display 1 USD to 1 GBP conversion rate. 
*/
var setup = function (){
	var first = document.getElementById("first-currency");
	optionPopulator(first);
	first.value = "GBP"; // default first currency is GBP
	var second = document.getElementById("second-currency");
	optionPopulator(second);
	second.value = "USD"; // default second currency is USD
	amount = document.getElementById("amountInput");
	amount.value = 1;
	amount = amount.value;
	convertCurrencies(amount);
	displayRates(amount);
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


/* get user input */ 
var currencyInputForm = document.getElementById("currencyInputForm");
currencyInputForm.addEventListener("submit", function(event){
	event.preventDefault();
	amount = document.getElementById("amountInput");
	amount = amount.value;
	convertCurrencies(amount);
	displayRates();
});	

/* convert a currency's acronym to its full name*/
function acronymToName(){
	for (var fullName in fx.names){
		if ( fullName == fx.settings.from ){
			displayFirst = fx.names[fullName];
		}
		else if ( fullName == fx.settings.to ){
			displaySecond = fx.names[fullName];
		} 
	}
}



