(function($, window, document) {
    $(document).ready(function() {
    
        $(".downloadable").hover(function() {
            $("[name=" + this.id + "]").css("visibility", "hidden");                     
            }, function() {
            $("[name=" + this.id + "]").css("visibility", "visible");
        }); 

    });
}(window.jQuery, window, document));