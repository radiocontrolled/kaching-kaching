## Features 

Currency converstion tool
- Pick a currency from a drop down menu
- Compare that currency to another currency picked from another drop down menu
- Provide the exchange rate as two number

Historical rate 
- View performance over last 5 days on a graph

## Dependencies

The exchange rate data that this tool uses is from the <a href="https://openexchangerates.org/">Open Exchange Rates</a> project. Open Exchange Rates data 
(rates and currency names) is bootstrapped into the page using the cURL PHP library. Bootstrapping is handled in a file called `request.php`, which isn't included in the public 
GitHub repository for this project. 

This application also makes use of <a href="https://josscrowcroft.github.io/money.js/">Money.js</a>, a JavaScript currency conversion library. 

## Disclaimer
Please note, this tool is for informational purposes only. I can't verify the data, which is from a <a href="https://openexchangerates.org/">third party</a>, or the accuracy of the conversions. 

## Roadmap 
- Use money.js as a RequireJS/AMD module.

