(function($, window, document) {
    $(document).ready(function() {
       
        $(".anchor").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;
                
                $('html, body').animate({
                        scrollTop: $(hash).offset().top - ($('#navigation').height() * 2)
                    }, 800, function() {
                        window.location.hash = $(hash).offset().top - ($('#navigation').height() * 2);
                    }
                );
            }
        });
        
    });
}(window.jQuery, window, document));