<?php

// Access the Open Exchange Rates API with cURL - http://php.net/manual/en/book.curl.php

// latest exchange rates 
$file = 'latest.json';

// get list of full currency names, e.g. "CAD": "Canadian Dollar"
$currenciesList = 'currencies.json';

// Open Exchange Rates App ID
$appId = 'YOURID';

// Open cURL session:
$ch = curl_init("http://openexchangerates.org/api/{$file}?app_id={$appId}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$list = curl_init("http://openexchangerates.org/api/{$currenciesList}?app_id={$appId}");
curl_setopt($list, CURLOPT_RETURNTRANSFER, 1);

// Get the exchange rates data 
$jsonRates = curl_exec($ch);
curl_close($ch);

// Get the exchange rates data 
$jsonCurrencyNames = curl_exec($list);
curl_close($list);

// Decode JSON response:
$exchangeRates = json_decode($jsonRates);
$currencyNames = json_decode($jsonCurrencyNames);

// Bootstrap loaded exchange rates into JavaScript for money.js:
echo '<script>fx.rates = ' . json_encode($exchangeRates->rates) . '; fx.base = ' . json_encode($exchangeRates->base) . '</script>';

// Bootstrap loaded currency names into JavaScript for money.js
echo '<script>fx.names = ' . json_encode($currencyNames) . '; ' . '</script>';

?>