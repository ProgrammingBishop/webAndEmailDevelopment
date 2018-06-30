<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php 
			// Old Array
			$numberList = array();

			// New Array (0-based)
			$numberList = [ 23, 64, 267, 23, 45, 'fsfs', 'gtdvfdvdf', 'Hello' ];

			// View contents of Array
			print_r($numberList);

			echo '<br /><br /><br /><br />';
			echo $numberList[6];
			echo '<br /><br /><br /><br />';


			// Associative Arrays
			$associativeArray = [ 'age1' => 8, 'age2' => 46 ];
			echo $associativeArray['age2'] - $associativeArray['age1'];
		?>
	</body>
</html>