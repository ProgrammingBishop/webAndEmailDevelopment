<script type="text/javascript">

    var email = encodeURIComponent('%%email{js}%%');

    // Redirect to design gallery after the pixel has fired the form handler
    function redirect(AoP) {
        setTimeout(function() {
            top.location.href = "http://go.officite.com/gallery/" + AoP + "/designs"; 
        }, 1000);
    }

    switch('%%src{js}%%') {

        // Magazine Ads
        case "AAIDNews": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/4b3mt?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;    
            
        case "AAOHNSBulletin": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-11/4xrcv?email=' + email + '" height="1px" width="1px" />');
            redirect("ent");
            break;

        case "AAPNews": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-06/4x15f?email=' + email + '" height="1px" width="1px" />');
            redirect("pediatric");
            break; 
            
        case "AGDImpact": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-02/3rppw?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "AOAJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-01-15/6rg7c?email=' + email + '" height="1px" width="1px" />');
            setTimeout(function() {
                top.location.href = "http://ofc-ost.com"; 
            }, 1000);
            break;
            
        case "ASGEConnection": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-31/51jjv?email=' + email + '" height="1px" width="1px" />');
            redirect("gastro");
            break;

        case "CDAJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rnzk?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "CDAUpdate": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-11-30/3r6df?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "ColoradoMedicine": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-09-21/64w2x?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "CSDACommunicator": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/4b41t?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "DentEcon": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-11-21/3q8n9?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "DentalTown": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-01-18/6rtbm?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "DentNewsJournal": 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "DermWorld": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rnzp?email=' + email + '" height="1px" width="1px" />');
            redirect("derm");
            break;
            
        case "DHPI": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-09-14/64kzd?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "GDAAction":
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rnzr?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "GDAUpdtae":
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rnzr?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "ILDentalNews": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rp15?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "KDAToday": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/4b3mp?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "MDAJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/49lvk?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "MDSJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-13/4bwh9?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "MichiganMedicine": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-03-27/56jmd?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "MNNWDentJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-04/4w7zm?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "MODAFocus":
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/4b43y?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "MSDANews":
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-11/4xr8j?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "NCDentGazette": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-02-08/524pg?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "NDDABulletin": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-12/4xstq?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "NWDentistryJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-04/4w7zm?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "OSMAMedicine": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-23/7bzcy?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;

        case "PodiatryMGMT": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-02/3rppt?email=' + email + '" height="1px" width="1px" />');
            redirect("podiatry");
            break;
            
        case "PodiatryToday": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-11/4xr9l?email=' + email + '" height="1px" width="1px" />');
            redirect("podiatry");
            break;

        case "QCDSBulletin": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-11-15/3ps1y?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "SCDABulletin": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-16/4cz4k?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        case "TexasMedicine": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-02/3rppy?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
            
        case "TodaysFDA": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-01/3rp13?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "TPNews": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-01-06/4x15f?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "WDAJournal": 
            document.write('<iframe src="http://info.officite.com/l/187962/2016-12-09/49lkm?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
        
        // Banner Ads
        case "TPEba": 
            document.write('<iframe src="http://info.officite.com/l/187962/2017-09-29/666xb?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;
            
        case "AGDba": 
            document.write('<iframe src="http://info.officite.com/l/187962/2018-03-07/794ty?email=' + email + '" height="1px" width="1px" />');
            redirect("dental");
            break;

        // Overflow
        default: 
            document.write('<iframe src="?email=' + email + '" height="1px" width="1px" />');
            redirect("general-medical");
            break;
    }

</script>