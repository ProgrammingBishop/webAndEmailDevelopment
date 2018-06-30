<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
		<?php  
            if( isset( $_POST['submit'] ) ) {
                $username = $_POST['username'];
                $password = $_POST['password'];
        
                $minimum = 5;
                $maximum = 20;
        
                if( strlen($username) < $minimum || strlen($username) > $maximum ) {
                    echo 'Username needs to be longer than 5 <br />' ;
                }
        
                $names = ['Ragnair', 'Yuelan', 'Riyun'];
        
                if( !in_array($username, $names) ) {
                    echo 'No Username is found...';
                } else {
                    echo 'Welcome!';
                }
            }
		?>
	</body>
</html>