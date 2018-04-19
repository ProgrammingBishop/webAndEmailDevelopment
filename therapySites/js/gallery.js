(function($, window, document) {
    $(document).ready(function() {

        // Get src value from URL
        var $url = $(location).attr('href');
        var path = $url.split(/\?src=|\&/);
        var src  = path[1];
        
        // Dynamic Content
        var $logo      = $('.brand');
        var $affiliate = $('.affiliate');
        
        switch(src) {
                
        // Email    
            case "AATBS618":
                $logo.attr     ('src', "https://s3.amazonaws.com/sitesllc-eblast/2018-global/dualLogos/aatbs.png");
                $affiliate.html('AATBS members');
                break;

            case "June2018":
                break;

            case "MPA618":
                $logo.attr     ('src', "https://s3.amazonaws.com/sitesllc-eblast/2018-global/dualLogos/mpa.png");
                $affiliate.html('MPA members');
                break;

            case "TS0618":
                break;

        // Banner Ad
            case "PC0618":
                $logo.attr     ('src', "https://s3.amazonaws.com/sitesllc-eblast/2018-global/dualLogos/pc.png");
                $affiliate.html('APA Practice Central members');
                break;

            case "APA0618":
                $logo.attr     ('src', "https://s3.amazonaws.com/sitesllc-eblast/2018-global/dualLogos/apa.png");
                $affiliate.html('APA members');
                break;

            case "June2018ba":
                break;

            case "June2018apa":
                $logo.attr     ('src', "https://s3.amazonaws.com/sitesllc-eblast/2018-global/dualLogos/apa.png");
                $affiliate.html('APA members');
                break;

        // Overflow
            default: 
                break;
        }
        
    });
}(window.jQuery, window, document));