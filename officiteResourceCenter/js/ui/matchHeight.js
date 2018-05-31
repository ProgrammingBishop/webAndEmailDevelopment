(function($, window, document) {
    $(document).ready(function() {

    	var $footerHeight     = -$('#henry__shein__footer').height();
    	var $jumbotronContent = $('#jumbotron__content');
       
        $(function() {
            $('.download_box').matchHeight();
        });

        $jumbotronContent.css( 'margin-top', $footerHeight );

        $(window).resize( function() {
            if( $(window).width() < 996 ) {
            	$jumbotronContent.css( 'margin-top', $footerHeight * 1.5 );
            } else {
            	$jumbotronContent.css( 'margin-top', $footerHeight );
            }
        });
        
    });
}(window.jQuery, window, document));