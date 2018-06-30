<!DOCTYPE html>

<html>
	<head>
		<meta charset='UTF-8'>
		<title>Document</title>
	</head>

	<body>
        <!-- Post submission to formProcess.php -->
        <!-- 'name' values will be sent -->
        <!-- All values are sent to super global '$_POST' -->
        <form action='formProcess.php' method='POST'>
            <input type='text' name='username'><br />
            <input type='password' name='password'><br />
            <input type='submit' name='submit'>
        </form>
	</body>
</html>