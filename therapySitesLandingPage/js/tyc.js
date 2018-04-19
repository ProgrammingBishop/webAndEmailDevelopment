<script type="text/javascript">

    var email = encodeURIComponent('%%email{js}%%');

    function redirect() {
        setTimeout(function() {
            top.location.href = "http://info.therapysites.com/TS/ThankYou"; 
        }, 1500);
    }
        
    switch('%%src{js}%%') {
        
    // Email    
        case "AATBS618": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "June2018": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "MPA618": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "TS0618": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
    // Banner Ad
        case "PC0618": 
            document.write('<iframe src="http://info.therapysites.com/l/315711/2018-04-12/y7rh?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "APA0618": 
            document.write('<iframe src="http://info.therapysites.com/l/315711/2018-04-12/y7rk?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "June2018ba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
            
        case "June2018apa": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;

    // Overflow
        default: 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect();
            break;
    } 

</script>