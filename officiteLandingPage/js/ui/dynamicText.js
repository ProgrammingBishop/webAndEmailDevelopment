(function($, window, document) {
    $(document).ready(function() {
        
        var $featuresH2 = $('#features-h2');
        
        if( $(window).width() > 576 ) {
            $featuresH2.html('Click the Icons for More Information');
        }
        
        $(window).resize( function() {
            if( $(window).width() > 576 ) { $featuresH2.html('Click the Icons for More Information'); } 
            else                          { $featuresH2.html('Our Features'); }
        });
        
    });
}(window.jQuery, window, document));