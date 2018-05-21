var domController = (function ($) {

    var domElements = {
        // Player 1 DOM Elements
        // --------------------------------------------------
        player__1__name : $('#player__1__name'),

        // Life
        player__1__life__total    : $('#player__1__life__total'),
        player__1__add__life      : $('#player__1__add__life'),
        player__1__subtract__life : $('#player__1__subtract__life'),

        // poison
        player__1__poison__total    : $('#player__1__poison__total'),
        player__1__add__poison      : $('#player__1__add__poison'),
        player__1__subtract__poison : $('#player__1__subtract__poison'),

        // Commander
        player__1__commander__total    : $('#player__1__commander__total'),
        player__1__add__commander      : $('#player__1__add__commander'),
        player__1__subtract__commander : $('#player__1__subtract__commander'),
        // --------------------------------------------------


        // Player 2 DOM Elements
        // --------------------------------------------------
        player__2__name : $('#player__2__name'),

        // Life
        player__2__life__total    : $('#player__2__life__total'),
        player__2__add__life      : $('#player__2__add__life'),
        player__2__subtract__life : $('#player__2__subtract__life'),

        // poison
        player__2__poison__total    : $('#player__2__poison__total'),
        player__2__add__poison      : $('#player__2__add__poison'),
        player__2__subtract__poison : $('#player__2__subtract__poison'),

        // Commander
        player__2__commander__total    : $('#player__2__commander__total'),
        player__2__add__commander      : $('#player__2__add__commander'),
        player__2__subtract__commander : $('#player__2__subtract__commander'),
        // --------------------------------------------------


        // Control DOM Elements
        // --------------------------------------------------
        roll__dice : $('#roll__dice'),
        modern     : $('#modern'),
        commander  : $('#commander'),
        // --------------------------------------------------


        // Other DOM Elements
        // --------------------------------------------------
        plus_counter  : $('.plus_counter'),
        minus_counter : $('.minus_counter')
        // --------------------------------------------------
    };

    return {
        getDOM: function() {
            return domElements;
        }
    }

})(jQuery);



var playerController = (function() {
    
    return {
        add: function(theDom, event) {
            var player = event.id.split('__')[1];
            var score  = event.id.split('__')[3];
            var target = theDom['player__' + player + '__' + score + '__total'];

            target.html(parseInt(target.html()) + 1);
        },

        subtract: function(theDom, event) {
            var player = event.id.split('__')[1];
            var score  = event.id.split('__')[3];
            var target = theDom['player__' + player + '__' + score + '__total'];

            if (parseInt(target.html()) > 0) {
                target.html(parseInt(target.html()) - 1);
            }
        }
    }

})();



var gameController = (function() {

    return {
        modern: function(theDom) {
            // Player 1
            theDom['player__1__life__total'].html(20);
            theDom['player__1__poison__total'].html(0);
            $('.commander').css('display', 'none');

            // Player 2
            theDom['player__2__life__total'].html(20);
            theDom['player__2__poison__total'].html(0);
            $('.commander').css('display', 'none');
        },

        commander: function(theDom) {
            // Player 1
            theDom['player__1__life__total'].html(40);
            theDom['player__1__poison__total'].html(0);
            $('.commander').css('display', 'block');
            theDom['player__1__commander__total'].html(21);

            // Player 2
            theDom['player__2__life__total'].html(40);
            theDom['player__2__poison__total'].html(0);
            $('.commander').css('display', 'block');
            theDom['player__2__commander__total'].html(21);
        }
    }

})();



var controller = (function(domController, gameController, playerController) {
    
    var setupEventListeners = function(theDom) {
        // Setup the Game
        theDom['modern'].on('click', function() {
            gameController.modern(theDom);
        });

        theDom['commander'].on('click', function() {
            gameController.commander(theDom);
        });

        // Adjust Points
        theDom['plus_counter'].on('click', function() {
            playerController.add(theDom, this);
        });

        theDom['minus_counter'].on('click', function() {
            playerController.subtract(theDom, this);
        });
    };



    return {
        init: function() {
            // Get DOM
            var theDom = domController.getDOM();

            // Create Default Game (Modern)
            gameController.modern(theDom);

            // Start Event Listner
            setupEventListeners(theDom);
        }
    }

})(domController, gameController, playerController);


controller.init();