var domController = (function ($) {

    var domElements = {
        // Player DOM Elements
        // --------------------------------------------------
        player_name        : $('.player_name'),
        change_player_name : $('.change_player_name'),
        plus_counter       : $('.plus_counter'),
        minus_counter      : $('.minus_counter'),

        // Life
        player_life_total    : $('.player_life_total'),
        player_add_life      : $('.player_add_life'),
        player_subtract_life : $('.player_subtract_life'),

        // poison
        player_poison_total    : $('.player_poison_total'),
        player_add_poison      : $('.player_add_poison'),
        player_subtract_poison : $('.player_subtract_poison'),

        // Commander
        player_commander_total    : $('.player_commander_total'),
        player_add_commander      : $('.player_add_commander'),
        player_subtract_commander : $('.player_subtract_commander'),

        // Player 1
        player__1__life      : $('#player__1__life'),
        player__1__poison    : $('#player__1__poison'),
        player__1__commander : $('#player__1__commander'),

        // Player 2
        player__2__life      : $('#player__2__life'),
        player__2__poison    : $('#player__2__poison'),
        player__2__commander : $('#player__2__commander'),
        // --------------------------------------------------

        // Control DOM Elements
        // --------------------------------------------------
        roll_dice : $('#roll__dice'),
        dice      : $('#dice'),
        modern    : $('#modern'),
        commander : $('#commander')
        // --------------------------------------------------
    };

    return {
        getDOM: function() {
            return domElements;
        }
    }

})(jQuery);



var playerController = (function($) {
    
    return {
        nameChange: function(theDom, obj) {
            $(obj)
                .next()
                .css({'visibility':'visible', 'height':'2rem'})
                .val('');
        },

        confirmName: function(theDom, event, obj) {
            if (event.which == 13 && $(obj).val() != '') {
                $(obj)
                    .css({'visibility':'hidden', 'height':'0' })
                    .prev().html($(obj).val());
            }
        },

        add: function(theDom, obj) {
            var target = theDom[$(obj).attr('name')]; 
            target.html(parseInt(target.html()) + 1);
        },

        subtract: function(theDom, obj) {
            var target = theDom[$(obj).attr('name')]; 

            if (parseInt(target.html()) > 0) {
                target.html(parseInt(target.html()) - 1);
            }
        }
    }

})(jQuery);



var gameController = (function($) {

    return {
        modern: function(theDom) {
            theDom['player_life_total'].html(20);
            theDom['player_poison_total'].html(0);
            $('.commander').css('display', 'none');
        },

        commander: function(theDom) {
            theDom['player_life_total'].html(40);
            theDom['player_poison_total'].html(0);
            $('.commander').css('display', 'block');
            theDom['player_commander_total'].html(21);
        },

        rollDice: function(theDom, obj) {
            var roll = Math.ceil(Math.random() * 6);
            theDom['dice'].attr('src', './img/dice/' + roll + '.png');

            if ($(obj).html() == 'Roll Dice') {
                $(obj)
                    .html('Reset')
                    .next().css('visibility', 'visible');
            } else {
                $(obj)
                    .html('Roll Dice')
                    .next().css('visibility', 'hidden');
            }
        }
    }

})(jQuery);



var controller = (function($, domController, gameController, playerController) {
    
    var setupEventListeners = function(theDom) {
        // Setup the Game
        theDom['modern'].on('click', function() { 
            gameController.modern(theDom); 
        });

        theDom['commander'].on('click', function() { 
            gameController.commander(theDom); 
        });


        // Adjust Points
        theDom['plus_counter' ].on('click', function() { 
            playerController.add(theDom, this); 
        });

        theDom['minus_counter'].on('click', function() { 
            playerController.subtract(theDom, this); 
        });


        // Adjust Name
        theDom['player_name'].on('click', function() { 
            playerController.nameChange(theDom, this); 
        });

        theDom['change_player_name'].keypress(function(event) { 
            playerController.confirmName(theDom, event, this);
        });


        // Roll Dice
        theDom['roll_dice'].on('click', function() {
            gameController.rollDice(theDom, this);
        });
    };

    return {
        init: function() {
            var theDom = domController.getDOM();

            gameController.modern(theDom);
            setupEventListeners(theDom);
        }
    }

})(jQuery, domController, gameController, playerController);



controller.init();