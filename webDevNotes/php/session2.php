<?php 
    session_start();

    // Session started in session1.php by setting value to session key
    // session2.php will access the session key created on session1.php by key 'greeting'
    echo $_SESSION['greeting'];
?>


<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php 
			
		?>
	</body>
</html>