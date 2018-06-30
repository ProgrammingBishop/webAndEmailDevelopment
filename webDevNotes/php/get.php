<?php
    print_r($_GET);
?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
        <?php 
            $id = 10;
        ?>

        <a href="get.php?id=<?php echo $id; ?>">Set</a>
	</body>
</html>