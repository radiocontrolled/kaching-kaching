<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
	<title>Currency Converter</title>
	<script src="d3.v3.js"></script>
	<script src="money.min.js"></script>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<?php include 'request.php'; ?>
	
	<section>
		<main>
		</main>
	
		<form id="currencyInputForm">
	
			<fieldset class="select-styling">
				
				<div class="panel" id="display"></div>
				
				<input type="number" id="amountInput" name="name" placeholder="Amount">
			
				<label for="first-currency">From</label>
		  		<select name="first-currency" id="first-currency"></select>
		  	
				<label for="second-currency">To</label>
				<select name="second-currency" id="second-currency"></select>	
				
				<input type="submit" value="Convert" id="searchButton">	
				
			</fieldset>
			
		</form>
		
	</section>

<script src="converter.js"></script>
</body>
