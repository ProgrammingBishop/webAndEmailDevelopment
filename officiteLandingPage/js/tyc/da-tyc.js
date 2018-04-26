<script type="text/javascript">

    var email = encodeURIComponent('%%email{js}%%');

    // Redirect to design gallery after the pixel has fired the form handler
    function redirect(AoP) {
        setTimeout(function() {
            top.location.href = "http://go.officite.com/gallery/" + AoP + "/designs"; 
        }, 1000);
    }

    switch('%%src{js}%%') {

    // Emails
        case "ADD": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;
            
        case "Dental": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "Dermatology": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;
            
        case "Demandforce": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "Gastroenterology": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("gastro");
            break;

        case "Medical": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "ObstetricsGynecology": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("obgyn");
            break;

        case "Otolaryngology": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("ent");
            break;

        case "Podiatry": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("podiatry");
            break;

        case "Pediatrics": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("pediatric");
            break;
            
        case "TPEem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
    // Banner Ads
        case "TPEba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "AOAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            setTimeout(function() {
                top.location.href = "http://ofc-ost.com"; 
            }, 1000);
            break;
            
        case "AGDba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
    // Marketing Kit Emails
        case "AADem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;
            
        case "AOAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            setTimeout(function() {
                top.location.href = "http://ofc-ost.com"; 
            }, 1000);
            break;
            
        case "FDAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "FMAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "MSMAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "MSMSem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "OSMAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "QCDSem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "TMAem": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
    // Marketing Kit Banner Ads
        case "AADba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;
            
        case "FDAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "FMAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "MSMAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "MSMSba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "OHSAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "QCDSba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "TMAba": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("medical");
            break;

    // Overflow
        default: 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
    }

</script>