(function($, window, document) {
    $(document).ready(function() {
       
        // Preview Design
        function preview(value1, value2, header) {
            $(".aop").on('click', function() { 
                $("#" + this.getAttribute('name')).css("visibility", value1); 
            });

            $(".exit").on('click', function() { 
                $("#" + this.getAttribute('name')).css("visibility", value2); 
            });
            
            if (header == 1) { $("#designs-h2").html("Sample Customizable Designs"); }
            else             { $("#designs-h2").html("Preview Customizable Designs"); }
        }
        
        // Initial Ability to Preview
        if( $(window).width() > 996 ) {
            preview("visible", "hidden", 1);
        }
        
        // Conditional Ability to Preview
        $(window).resize( function() {
            if( $(window).width() > 996 ) { preview("visible", "hidden", 1); } 
            else                          { preview("hidden",  "hidden", 0); }
        });
        
    });
}(window.jQuery, window, document));