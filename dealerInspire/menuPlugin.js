/* ==================================================
DOM Elements
================================================== */
var domElements = (function () {

    var theDom = {
        main_menu               : "#menu-main-menu > li",
        mega_menu               : "#menu-main-menu .megamenu",
        mega_menu_link          : ".megamenu .sub-menu > li > a",
        mega_menu_sub_head      : ".megamenu .sub-menu .sub-heading",
        mega_menu_sub_head_link : ".megamenu .sub-menu .sub-heading > ul > li > a",
        sub_menu                : "#menu-main-menu .sub-menu",
        sub_menu_link           : ".sub-menu > li > a"
    }

    return {
        getDom: function() {
            return theDom;
        }
    }

})();

/* ==================================================
Global Variables
================================================== */
var globalElements = (function () {

    var theGlobals = {
        li_array : []
    }

    return {
        getGlobals: function() {
            return theGlobals;
        }
    }

})();


/* ==================================================
Calculations
================================================== */
var calcController = (function ($) {

    var calcVars = {
    }

    return {
        getLongestSubMenuTextWidth: function() {

        },
        
        getNumberOfSubHeadings: function() {

        }
    }

})(jQuery);


/* ==================================================
Navigation Methods
================================================== */
var navController = (function ($) {

    var navVars = {
    }

    return {
        setMegaMenuWidth: function() {

        },

        setSubMenuWidth: function() {
            
        },

        setNavigationWidth: function(dom, globals) {
            $(dom.main_menu).each(function() {
                ( $(this).hasClass("megamenu") ) ? navController.setMegaMenuWidth() :
                                                   navController.setSubMenuWidth();
            });
        }
    }

})(jQuery);


/* ==================================================
Main Controller
================================================== */
var mainController = (function (theDom, theGlobals, navFuncs) {

    return {
        init: function() {
            var dom     = theDom.getDom();
            var globals = theGlobals.getGlobals();

            navFuncs.setNavigationWidth(dom, globals);
        }
    }

})(domElements, globalElements, navController);


jQuery(document).ready(function($) {
    if ( $(window).width() > 767 ) {
        mainController.init();
    }
});