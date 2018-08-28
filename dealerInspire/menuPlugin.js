/* ==================================================
DOM Elements
================================================== */
var domElements = (function () {

    var theDom = {
        main_menu               : "#menu-main-menu > li",
        mega_menu               : "megamenu",
        sub_head                : ".sub-heading",
        mega_menu_link          : "#menu-main-menu > li.megamenu .sub-menu > li > a",
        mega_menu_sub_head      : "#menu-main-menu > li.megamenu .sub-menu .sub-heading",
        link_item               : "li a",
        default_link            : "#menu-main-menu > li > a",

        
        mega_menu_sub_head_link : "#menu-main-menu > li.megamenu .sub-menu .sub-heading > ul > li > a",
        sub_menu                : ".sub-menu",
        sub_menu_link           : "#menu-main-menu .sub-menu > li > a"
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
        num_sub_head : 0,
        cur_width    : 0,
        max_width    : 0,
    }

    return {
        getLongestSubMenuTextWidth: function( text, fontSize, fontFamily, padWidth ) {
            var body = document.body;
            var temp = document.createElement('div');
            
            $(temp).css({ "display"     : "inline-block",
                          "padding"     : padWidth,
                          "line-height" : "1",
                          "position"    : "absolute",
                          "visibility"  : "hidden",
                          "font-size"   : fontSize,
                          "font-family" : fontFamily });

            temp.appendChild( document.createTextNode(text) );
            body.appendChild(temp);

            calcVars.cur_width = temp.offsetWidth;

            body.removeChild(temp);
        },

        getCalcVars: function() {
            return calcVars;
        }
    }

})(jQuery);


/* ==================================================
Navigation Methods
================================================== */
var navController = (function ($, calcFuncs) {

    var navVars = {
        font_size : 0,
        font_type : "",
        pad_width : 0
    }

    return {
        setMegaMenuWidth: function(navItem, dom, calcs) {
            
            calcs.num_sub_head = $(navItem).find(dom.sub_head).length;

            $(navItem).find(dom.link_item).each(function() {
                calcFuncs.getLongestSubMenuTextWidth( $(this).text(), navVars.font_size, navVars.font_type, navVars.pad_width );

                if ( calcs.cur_width > calcs.max_width ) {
                    calcs.max_width = calcs.cur_width;
                }
            });

            $(navItem).find(dom.sub_menu).css( "width", String(calcs.max_width * calcs.num_sub_head) + "px" );
            $(navItem).find(dom.link_item).css("background", "none");
        },

        setSubMenuWidth: function(navItem, dom, calcs) {
            calcs.cur_width    = 0;
            calcs.max_width    = 0;

            $(navItem).find(dom.link_item).each(function() {
                calcFuncs.getLongestSubMenuTextWidth( $(this).text(), navVars.font_size, navVars.font_type, navVars.pad_width );

                if ( calcs.cur_width > calcs.max_width ) {
                    calcs.max_width = calcs.cur_width;
                }
            });

            $(navItem).find(dom.sub_menu).css( "width", String(calcs.max_width) + "px" );
        },

        setTextStyles: function(dom) {
            navVars.font_size = dom.default_link.find(dom.link_item).css("font-size");
            navVars.font_type = dom.default_link.find(dom.link_item).css("font-family");
            navVars.pad_width = parseInt( dom.default_link.find(dom.link_item).css("padding-left").split("px")[0] * 2 );
        },

        setNavigationWidth: function(dom, globals, calcs) {
            navController.setTextStyles(dom);

            $(dom.main_menu).each(function() {
                calcs.cur_width = 0;
                calcs.max_width = 0;

                ( $(this).hasClass(dom.mega_menu) && $(dom.mega_menu_sub_head).length > 1 ) ? 
                    navController.setMegaMenuWidth( $(this), dom, calcs ) : 
                    navController.setSubMenuWidth(  $(this), dom, calcs );
            });
        }
    }

})(jQuery, calcController);


/* ==================================================
Main Controller
================================================== */
var mainController = (function (theDom, theGlobals, navFuncs, calcFuncs) {

    return {
        init: function() {
            var dom     = theDom.getDom();
            var globals = theGlobals.getGlobals();
            var calcs   = calcFuncs.getCalcVars();

            navFuncs.setNavigationWidth(dom, globals, calcs);
        }
    }

})(domElements, globalElements, navController, calcController);


jQuery(document).ready(function($) {
    if ( $(window).width() > 767 ) {
        mainController.init();
    }
});