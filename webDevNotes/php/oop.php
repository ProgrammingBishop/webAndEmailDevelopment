<?php 
    class Car {
        var $wheels = 4;
        var $hood   = 1;
        var $engine = 1;
        var $doors  = 4;
        
        function AddWheels() {
            $this -> wheels = 10;
        }
    } 
    
    if( class_exists("Car") ) { echo "Hai!"; } 
    else { echo "Byai!"; }

    if( method_exists("Car", "AddWheels") ) { echo "Hai!"; } 
    else { echo "Byai!"; }

    $bmw = new Car();

    $bmw -> AddWheels();
    echo $bmw -> wheels;
?>