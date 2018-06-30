<?php 
    echo $_POST['name'];
?>


<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
        <form action="post.php" method="POST">
            <input type="text" name="name">
            <input type='submit'>
        </form>
	</body>
</html>