(function($, window, document) {
    $(document).ready(function() {
    
        var $tab = $('div.tab > a');

        $tab.on('click', function() {
            $tab.removeClass('active');
            $("a:contains(" + $(this).html() + ")").addClass('active');

            var tabLabel  = this.text.toLowerCase();
            var activeTab = $('#' + tabLabel);

            if( tabLabel.indexOf(' ') !== -1 ) {
                var tabLabel = tabLabel.replace(/\s/g, '__');
            }

            $('.tab_content').addClass('inactive');
            $('#' + tabLabel)
                .removeClass('inactive')
                .css({'animation-name' : 'fadeIn',
                      'animation-duration' : '.5s'});
        });
            
    });
}(window.jQuery, window, document));