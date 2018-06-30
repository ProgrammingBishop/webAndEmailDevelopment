<?php 
	$name  = "name";
	$value = 100;
	// Add 1 week to the current time cookie is set
	$expiration = time() + ( 60 * 60 * 24 * 7 );

    setcookie( $name, $value, $expiration );
?>


<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<!-- name is the key and value is the value returned by $_COOKIE['name'] -->
		<?php
			if ( isset($_COOKIE['name']) ) {
				$newName = $_COOKIE['name'];
				echo $newName;
			} else {
				$newName = "";
			}
		?>
	</body>
</html>