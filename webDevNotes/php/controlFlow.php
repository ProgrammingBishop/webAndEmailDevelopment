<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php 
			if( 3 < 10 ) {
				echo 'Hai <br /><br />';
			} elseif( 3 < 10 ) {
				echo 'Hello <br /><br />';
			} else {
				echo 'No <br /><br />';
			}


			$number = 0;

			while( $number < 15 ) {
				switch($number) {
					case 10:
						echo 'Hai 10 <br /><br />';
						break;

					case 5:
						echo 'Hai 5 <br /><br />';
						break;

					case 12:
						echo 'Hai 12 <br /><br />';
						break;

					case 15:
						echo 'Hai 15 <br /><br />';
						break;

					default:
						echo 'no <br /><br />';
						break;
				}

				$number++;
			}


			for( $i = 0; $i < 10; $i++ ) {
				echo $i . '<br /><br />';
			}


			$numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

			foreach( $numbers as $number ) {
				echo $number . '<br /><br />';
			}
		?>
	</body>
</html>