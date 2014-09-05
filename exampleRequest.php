<?php

/* get current 
 * exchange rates
 */

// Open Exchange Rates App ID
$appId = 'YOUR_API_KEY';

// latest exchange rates 
$file = 'latest.json';

// get list of full currency names, e.g. "CAD": "Canadian Dollar"
$currenciesList = 'currencies.json';

// get today's date in yyyy-mm-dd format
$currentDate = date('Y-m-d');
$dateString = $currentDate . ".json";

// Open cURL session:
$ch = curl_init("http://openexchangerates.org/api/{$file}?app_id={$appId}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$list = curl_init("http://openexchangerates.org/api/{$currenciesList}?app_id={$appId}");
curl_setopt($list, CURLOPT_RETURNTRANSFER, 1);



// Get the exchange rates data 
$jsonRates = curl_exec($ch);
curl_close($ch);

// Get the currency names data 
$jsonCurrencyNames = curl_exec($list);
curl_close($list);


// Decode JSON response:
$exchangeRates = json_decode($jsonRates);
$currencyNames = json_decode($jsonCurrencyNames);


// Bootstrap loaded exchange rates into JavaScript for money.js:
echo '<script>fx.rates = ' . json_encode($exchangeRates->rates) . '; fx.base = ' . json_encode($exchangeRates->base) . '</script>';

// Bootstrap loaded currency names into JavaScript for money.js
echo '<script>fx.names = ' . json_encode($currencyNames) . '; ' . '</script>';


/* get 3 years 
 * historical rates data
 */

$years = array(
			date('Y-m-d', strtotime('1 year ago')). ".json",
			date('Y-m-d', strtotime('2 years ago')). ".json",
			date('Y-m-d', strtotime('3 years ago')). ".json"	
		);


function historicalBootstrap($years, $id){

    for($i = 0; $i < 3; $i++){
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