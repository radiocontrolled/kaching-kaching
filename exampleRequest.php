<?php

// Open Exchange Rates App ID
$appId = 'YOUR_API_KEY';

/* Get current 
 * exchange rates 
 */

// Latest exchange rates 
$file = 'latest.json';
// Open cURL session:
$ch = curl_init("http://openexchangerates.org/api/{$file}?app_id={$appId}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// Get the exchange rates data 
$jsonRates = curl_exec($ch);
curl_close($ch);
// Decode JSON response:
$exchangeRates = json_decode($jsonRates);
// Bootstrap loaded exchange rates into JavaScript for money.js:
echo '<script>fx.rates = ' . json_encode($exchangeRates->rates) . '; fx.base = ' . json_encode($exchangeRates->base) . '</script>';


/* Get the acronyms 
 * for currencies
 */ 

// get list of full currency names, e.g. "CAD": "Canadian Dollar"
$currenciesList = 'currencies.json';
//open cURL session
$list = curl_init("http://openexchangerates.org/api/{$currenciesList}?app_id={$appId}");
curl_setopt($list, CURLOPT_RETURNTRANSFER, 1);
// Get the currency names data 
$jsonCurrencyNames = curl_exec($list);
curl_close($list);
// decode JSON response
$currencyNames = json_decode($jsonCurrencyNames);
// Bootstrap loaded currency names into JavaScript for money.js
echo '<script>fx.names = ' . json_encode($currencyNames) . '; ' . '</script>';


/* 
 * Get today's rates, 
 * and 3 years' historical 
 * rates data, and bootstrap the data into the page
 */
 
$years = array(
		date('Y-m-d'). ".json",
		date('Y-m-d', strtotime('1 year ago')). ".json",
		date('Y-m-d', strtotime('2 years ago')). ".json",
		date('Y-m-d', strtotime('3 years ago')). ".json"	
	);


function historicalBootstrap($years, $id){

    for($i = 0; $i < 4; $i++){
        $date = $years[$i]; 
        $ch = curl_init("http://openexchangerates.org/api/historical/{$date}?app_id={$id}");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $jsonHistoricalRates = curl_exec($ch);
        curl_close($ch);
        echo '<script>_'. $i . 'historical = '. $jsonHistoricalRates . ';' . '</script>';
    }   
}

historicalBootstrap($years, $appId);

?>