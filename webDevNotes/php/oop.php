<?php 
    class Store {
        protected $storeName     = "";
        protected $storeLocation = "";

        public function __construct() {
            $this->storeName     = "Gildas Guilds";
            $this->storeLocation = "Whiterun";
            
            echo $this->storeName . " " . $this->storeLocation;
        }

        public function getStoreName() {
            echo $this->storeName;
        }
    }
    
    class Merchant extends Store {
        private $name     = "";
        private $gold     = 0;
        private $location = "";

        public function __construct($name, $gold, $location) {
            $this->name     = $name;
            $this->gold     = $gold;
            $this->location = $location;
        }

        public function getName() {
            echo $this->name;
        }
        
        public function getGold() {
            echo $this->gold;
        }

        public function getLocation() {
            echo $this->location;
        }
    }

    $store = new Store();
    $merch = new Merchant("Barthalamew", 1270, "Whiterun");
    $merch->getGold();
?>