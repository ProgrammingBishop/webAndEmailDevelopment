(function($, window, document) {
    $(document).ready(function() {
    
        var new_date                              = new Date();
        var current_year                          = new_date.getFullYear();
        document.getElementById("year").innerHTML = current_year;    
        
    });
}(window.jQuery, window, document));