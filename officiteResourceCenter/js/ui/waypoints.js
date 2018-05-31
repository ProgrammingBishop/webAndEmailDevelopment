(function($, window, document) {
    $(document).ready(function() {
    
        var $resources   = $('#resources__nav');
        var $resourceNav = $('#resources__sticky__nav'); 
        

        // Fade in Navigation after Jumbotron
        $resources.waypoint (function(direction) { 
            if (direction == 'down' && $(window).width() > 576) {
                $resourceNav.css({'animation' : 'add_resource_nav .2s',
                                  'opacity'   : '1',
                                  'display'   : 'block'});
            } else {
                $resourceNav.css({'animation' : 'remove_resource_nav .2s',
                                  'opacity'   : '0'});
                
                window.setTimeout(function() {
                    $resourceNav.css('display', 'none');
                }, 500);
            }
        }, { offset: -$('#resource__links').children().height() });
            
    });
}(window.jQuery, window, document));