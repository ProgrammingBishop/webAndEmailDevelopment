(function($, window, document) {
    $(document).ready(function() {
    
        var $services    = $('.services-out');
        var $newsletter  = $('.newsletter-out');
        var $designs     = $('.designs-out');
        var $features    = $('.features-out');
        
        var $navigation  = $('#sticky-navigation');
        
        // Fade in Page Elements on Scroll
        $services.waypoint   ( function() { $services.addClass   ('services-in');    }, { offset: '75%' });
        $newsletter.waypoint ( function() { $newsletter.addClass ('newsletter-in');  }, { offset: '75%' });
        $designs.waypoint    ( function() { $designs.addClass    ('designs-in');     }, { offset: '75%' });
        $features.waypoint   ( function() { $features.addClass   ('features-in');     }, { offset: '75%' });
        
        // Fade in Navigation after Jumbotron
        $services.waypoint (function(direction) { 
            if (direction == 'down') {
                $navigation.css({'animation' : 'add-navigation .5s',
                                 'opacity'   : '1',
                                 'display'   : 'block'});
            } else {
                $navigation.css({'animation' : 'remove-navigation .5s',
                                 'opacity'   : '0'});
                
                window.setTimeout(function() {
                    $navigation.css('display', 'none');
                }, 500);
            }
        }, { offset: '40%' });
            
    });
}(window.jQuery, window, document));