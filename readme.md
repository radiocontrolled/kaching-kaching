# Features 

Currency converstion tool
- Pick a currency from a drop down menu
- Compare that currency to another currency picked from another drop down menu
- Provide the exchange rate as two number

Historical rate 
- View performance over last 5 days on a graph


The exchange rate data that this tool uses is from the <a href="https://openexchangerates.org/">Open Exchange Rates</a> project. In this application, the data
is bootstraped into the page using the cURL PHP library. This is handled in a file called `request.php`, which isn't included in the GitHub 
repository for security reasons.

This application also makes use of <a href="https://josscrowcroft.github.io/money.js/">Money.js</a>, a JavaScript currency conversion library. 

# Disclaimer
This tool is for informational purposes only. 

# Roadmap 
- Use money.js as a RequireJS/AMD module.

left off: finish walking through money.js documentation. 