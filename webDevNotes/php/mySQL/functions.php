<?php include "db.php";?>

<?php
    function readRows() {
        global $connection;

        $query  = "SELECT * FROM users";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die("Query FAILED " . mysqli_error($connection));
        }
        
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<pre>";
            print_r($row);
            echo "</pre>";
        }
    }

    function createRows() {
        global $connection;

        if (isset($_POST['submit'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];

            $username = mysqli_real_escape_string( $connection,  $username );
            $password = mysqli_real_escape_string( $connection,  $password );

            // PASSWORD ENCRYPTION
            // $2y is the encryption format
            // $10$ is the number of hashes to include
            // salt is an encryption string that must be at least 22 characters long 
            $hashFormat  = "$2y$10$";
            $salt        = "iusesomecrazystrings22"; 
            $hashAndSalt = $hashFormat . $salt;
            $password    = crypt( $password, $hashAndSalt );
            
            $query  = "INSERT INTO users(username, password) ";
            $query .= "VALUE ('$username', '$password')";
            $result = mysqli_query($connection, $query);

            if (!$result) {
                die("Query FAILED ".mysqli_error($connection));
            } else {
                echo "Record created!";
            }
        }
    }

    function showAllData() {
        global $connection;

        $query  = "SELECT * FROM users";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die("Query FAILED ".mysqli_error($connection));
        }

        while ($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            echo "<option value='$id'>$id</option>";
        }
    }

    function updateTable() {
        if (isset($_POST['submit'])) {
            global $connection;

            $username = $_POST['username'];
            $password = $_POST['password'];
            $id       = $_POST['id'];

            $query  = "UPDATE users SET ";
            $query .= "username = '$username', ";
            $query .= "password = '$password' ";
            $query .= "WHERE id = $id ";

            $result = mysqli_query($connection, $query);

            if (!$result) {
                die("QUERY FAILED ".mysqli_error($connection));
            } else {
                echo "Record updated!";
            }
        }
    }

    function deleteRows() {
        if (isset($_POST['submit'])) {
            global $connection;
            
            $username = $_POST['username'];
            $password = $_POST['password'];
            $id       = $_POST['id'];

            $query  = "DELETE FROM users ";
            $query .= "WHERE id = $id ";

            $result = mysqli_query($connection, $query);

            if (!$result) {
                die("QUERY FAILED ".mysqli_error($connection));
            } else {
                echo "Record deleted!";
            }
        }
    }
?>