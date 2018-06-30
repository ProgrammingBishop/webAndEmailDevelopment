<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php 
			function the_function($name) {
                echo 'success' . " " . $name;
                return 3 * 9;
            }

            function the_return($one, $two) {
                return $one * $two;
            }

            the_function('Ragnair');
            echo '<br /><br />';
            echo the_return(99, 953);
            echo '<br /><br />';

            $x = 19;
            
            function change_global() {
                // Target global variable
                // Without, variable is shadowed by scope
                global $x;
                $x = 28;
            }

            echo $x;
            echo '<br /><br />';
            change_global();
            echo $x;
		?>
	</body>
</html>