<script type="text/javascript">

    var email = encodeURIComponent('%%email{js}%%');

    // Redirect to design gallery after the pixel has fired the form handler
    function redirect(AoP) {
        setTimeout(function() {
            top.location.href = "http://go.officite.com/gallery/" + AoP + "/designs"; 
        }, 1500);
    }
        
    switch('%%src{js}%%') {
            
    // Healthcare Associations
        case "AAD": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdd1?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;

        case "AAOHNS": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdd9?email=' + email + '" height="1px" width="1px" />');
            redirect("ent");
            break;

        case "AAP": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bddc?email=' + email + '" height="1px" width="1px" />');
            redirect("pediatric");
            break;
            
        case "ACFAS": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bddf?email=' + email + '" height="1px" width="1px" />');
            redirect("podiatry");
            break;
            
        case "AOA": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bddh?email=' + email + '" height="1px" width="1px" />');
            setTimeout(function() {
                top.location.href = "http://ofc-ost.com"; 
            }, 1000);
            break;

        case "ASGE": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bddk?email=' + email + '" height="1px" width="1px" />');
            redirect("gastro");
            break;
            
        case "CMS": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bddm?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "FMA": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdfc?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "MSMA": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdfw?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "MSMS": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdgm?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "TMA": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdh5?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "TPE": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-16/7bdjc?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        default: 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
    } 

</script>