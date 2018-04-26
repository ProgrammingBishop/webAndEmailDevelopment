(function($, window, document) {
    $(document).ready(function() {

        // Get src value from URL
        var $url = $(location).attr('href');
        var path = $url.split(/\?src=|\&\#/);
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
              
        // Dental
            case "ADA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/officite.png");
                $affiliate.html ('Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
            
            case "AGD":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/agd.png");
                $affiliate.html ('AGD Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "ALDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/alda.png");
                $affiliate.html ('ALDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "CDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/cda.png");
                $affiliate.html ('CDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "CSDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/csda.png");
                $affiliate.html ('CSDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "FDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/fda.png");
                $affiliate.html ('FDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "GDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/gda.png");
                $affiliate.html ('GDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "ISDS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/isds.png");
                $affiliate.html ('ISDS Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "KDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/kda.png");
                $affiliate.html ('KDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "MDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/mida.png");
                $affiliate.html ('MDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "MDS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/mds.png");
                $affiliate.html ('MDS Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "MoDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/moda.png");
                $affiliate.html ('MDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "MnDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/mnda.png");
                $affiliate.html ('MDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "MSDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/msda.png");
                $affiliate.html ('MSDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NCDS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/ncds.png");
                $affiliate.html ('NCDS Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/nda.png");
                $affiliate.html ('NDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NDDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/ndda.png");
                $affiliate.html ('NDDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NHDS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/nhds.png");
                $affiliate.html ('NHDS Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "NJDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/njda.png");
                $affiliate.html ('NJDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "SCDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/scda.png");
                $affiliate.html ('SCDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
                
            case "WDA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/wda.png");
                $affiliate.html ('WDA Members');
                $expiration.html('6/31/2018');
                getImagery      ('dental');
                getDentalDocs   ();
                break;
            
        // Healthcare    
            case "AAD":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/aad.png");
                $affiliate.html ('AAD Members');
                $expiration.html('6/31/2018');
                getImagery      ('derm');
                getDermDocs     ();
                break;
                
            case "AAOHNS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/aaohns.png");
                $affiliate.html ('AAO-HNS Members');
                $expiration.html('6/31/2018');
                getImagery      ('ent');
                break;
                
            case "AAP":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/aap.png");
                $affiliate.html ('AAP Members');
                $expiration.html('6/31/2018');
                getImagery      ('pediatric');
                break;
                
            case "ACFAS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/acfas.png");
                $affiliate.html ('ACFAS Members');
                $expiration.html('6/31/2018');
                getImagery      ('podiatry');
                break;
                
            case "AOA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/aoa.png");
                $affiliate.html ('AOA Members');
                $expiration.html('6/31/2018');
                getImagery      ('osteo');
                break;
                
            case "ASGE":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/asge.png");
                $affiliate.html ('ASGE Members');
                $expiration.html('6/31/2018');
                getImagery      ('gastro');
                break;
                
            case "CMS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/cms.png");
                $affiliate.html ('CMS Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
                
            case "FMA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/fma.png");
                $affiliate.html ('FMA Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
                
            case "MSMA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/msma.png");
                $affiliate.html ('MSMA Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
                
            case "MSMS":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/msms.png");
                $affiliate.html ('MSMS Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
                
            case "OSMA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/osma.png");
                $affiliate.html ('OSMA Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
                break;
                
            case "TMA":
                $logo.attr      ('src', "https://s3.amazonaws.com/officite-eblast/2018-global/landingPage/dualLogos/tma.png");
                $affiliate.html ('TMA Members');
                $expiration.html('6/31/2018');
                getImagery      ('medical');
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