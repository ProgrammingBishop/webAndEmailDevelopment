(function($, window, document) {
    $(document).ready(function() {

    	var $tab   = $('div.tab > a');
    	var $video = $('.videoControl');

        $tab.on('click', function() {
        	$video[0].pause();
            $('#videos')
                .removeClass('col-lg-12')
                .addClass('col-lg-4');
        });

        $video.on('click', function() {
        	if( $video[0].paused ) {
                $('#videos')
                    .removeClass('col-lg-4')
                    .addClass   ('col-lg-12');
        		$video[0].play();
        	} else {
        		$video[0].pause();
                $('#videos')
                    .removeClass('col-lg-12')
                    .addClass   ('col-lg-4');
        	}
        });
        
    });
}(window.jQuery, window, document));