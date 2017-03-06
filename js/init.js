/**
 * Initialized the main App variable
 * @type {{ImageHelper: {}, PERIOD: number, Event: {MOUSE_ENTER: string, MOUSE_LEAVE: string}}}
 */
const App = {
    ImageHelper: {},
    PERIOD: 5000,
    Event: {
        MOUSE_ENTER: 'mouseenter',
        MOUSE_LEAVE: 'mouseleave'
    }
};

/**
 * return image srouce to be changed in background
 */
(function(ImageHelper) {
    var count = 0;
    var sources = [
        'images/bg1.jpg',
        'images/bg2.jpg',
        'images/bg3.jpg'
    ];
    ImageHelper.getSource = function() {
        var src = sources[count++];
        count = count === 3 ? 0 : count;
        return src;
    };
})(App.ImageHelper);