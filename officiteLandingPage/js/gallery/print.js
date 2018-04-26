(function($, window, document) {
    $(document).ready(function() {

        // Get src value from URL
        var $url = $(location).attr('href');
        var path = $url.split(/\?src=|\&/);
        var src  = path[1];
        
        // Swap Screenshots and Preview
        function getImagery(aop) {
            var $screenshot = $('.screenshot');
            var $preview    = $('.preview');
            var $phone      = $('#feature-phone');
            
            for (var index = 0; index < $screenshot.length; index++) {
                $screenshot[index].src = "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/screenshots/" + aop + "/0" + [index + 1] + ".png";
                $preview   [index].src = "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/screenshots/" + aop + "/0" + [index + 1] + ".png";
            }
            
            $phone.attr('src', 'https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/screenshots/' + aop + '/' + aop + 'Phone.png')
        }
        
        // Dermatology Downloads
        function getDermDocs() {
            var $patientPDF   = $('.patient__pdf');
            var $patientTitle = $('#patient__ed__title');
            var $patientDesc  = $('#patient__ed__description');
            
            $patientPDF.attr  ('href', 'https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/pdf/DermPatientEducation.pdf');
            $patientTitle.html('Derm Patient Education');
            $patientDesc.html ('Provide the best care with online patient education materials designed to improve clinical outcomes and reduce complications.');
        }
        
        // Dental Downloads
        function getDentalDocs() {
            var $patientPDF   = $('.patient__pdf');
            var $patientTitle = $('#patient__ed__title');
            var $patientDesc  = $('#patient__ed__description');
            
            $patientPDF.attr  ('href', 'http://go.officite.com/officite2018/06-june/summer60/pdf/DentalPatientEducation.pdf');
            $patientTitle.html('Dental Patient Education');
            $patientDesc.html ('Boost treatment acceptance and prevent complications with an online library of HD videos &amp; learning tools.');
            
            var $socialPDF   = $('.social__pdf');
            var $socialTitle = $('#social__title');
            var $socialDesc  = $('#social__description');
            
            $socialPDF.attr  ('href', 'https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/pdf/socialMedia.pdf');
            $socialTitle.html('Social Media');
            $socialDesc.html ('41% of people surveyed said social media would affect their choice of a healthcare provider. Reach them with Facebook, Twitter and optional blogging packages.');
        }
        
        // Dynamic Content
        var $logo       = $('.brand');
        var $affiliate  = $('.affiliate');
        var $expiration = $('.expiration');
        
        switch(src) {
              
            case "DentalDPG":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
            
            case "Dental":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "AAPNews":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/aap.png");
                $affiliate.html ('AAP Members');
                $expiration.html('6/31/2018');
                getImagery      ('pediatric');
                break;
                
            case "AGDImpact":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/agd.png");
                $affiliate.html ('AGD Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "ASGEConnection":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/asge.png");
                $affiliate.html ('ASGE Members');
                $expiration.html('6/31/2018');
                getImagery      ('gastro');
                break;
                
            case "CDAUpdate":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/cda.png");
                $affiliate.html ('CDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "CDAJournal":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/cda.png");
                $affiliate.html ('CDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "DermWorld":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('derm');
                getDermDocs     ();
                break;
                
            case "GDAAction":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/gda.png");
                $affiliate.html ('GDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "ILDentNews":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/isds.png");
                $affiliate.html ('ISDS Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NCDSGazette":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/ncds.png");
                $affiliate.html ('NCDS Members');
                $expiration.html('8/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "PodiatryMGMT":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('7/31/2018');
                getImagery      ('podiatry');
                break;
                
            case "PodiatryToday":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('podiatry');
                break;
                
            case "SCDABulleting":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/scda.png");
                $affiliate.html ('SCDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;

        // Overflow
            default: 
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
        }
        
    });
}(window.jQuery, window, document));