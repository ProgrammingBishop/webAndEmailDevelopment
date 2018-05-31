(function($, window, document) {
    $(document).ready(function() {
    
        var $levitate = $('#arrow');

        function runIt() {
           $levitate.animate({"margin-bottom": '-3rem'},  1000 );
           $levitate.animate({"margin-bottom": '-2rem'},  1000, runIt );
        }

        runIt();    
        
    });
}(window.jQuery, window, document));