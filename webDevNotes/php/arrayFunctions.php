<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php 
            $array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            echo max($array);
            echo '<br />';
            echo min($array);
            echo '<br />';
            print_r($array);
            echo '<br />';
            sort($array);
            echo '<br />';
            print_r($array);
            echo '<br />';
            echo in_array(7, $array);
		?>
	</body>
</html>