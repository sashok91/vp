var pages = pages || {};
pages.startWorkout = pages.startWorkout || {};


(function () {

    pages.startWorkout.layout = {
        id: 'pages.startWorkout',
        type: "clean",
        css: 'transparent',
        margin: 20,
        paddingY: 30,
        rows: [
            {
                cols: [
                    {},
                    {
                        id: 'template',
                        template: function (obj) {
                            return '<div class="details-block">' +
                                        '<div class="header"> Today\'s Workout Details</div>' +
                                        '<div class="muscules-block">' +
                                            '<span class="details-value"> Arms, Biceps, Neck </span>' +
                                        '</div>' +
                                        '<div class="img-container">' +
                                            '<object type="image/svg+xml" data="images/MG_Men_edit.svg" id="muscules-object" class="svg-object muscules-svg"></object>' +
                                        '</div>' +
                                        '<div class="estimated-time-block">' +
                                            '<span class="estimated-time-label"> Estimated time: </span>' +
                                            '<span class="estimated-time-value">47 min</span>' +
                                        '</div>' +
                                    '</div>';
                        },
                        css: 'details-template',
                        gravity: 10,
                        borderless: true,
                        autoheight: true,
                        maxWidth: 500
                    },
                    {},
                ]
            },
            {},
            {
                template: function () {
                    return '<div>' +
                        'You can customize today\'s workout before starting' +
                    '</div>';
                },
                css: 'customize-info transparent',
                borderless: true,
                autoheight: true
            },
            {
                margin: 20,
                paddingX: 20,
                cols: [
                    {
                        view: 'button',
                        css: 'secondary-btn',
                        value: "Customize Workout",
                        height: 70
                    },
                    {
                        view: 'button',
                        css: 'accent-btn',
                        value: "Start Workout",
                        height: 70
                    },
                ]
            }
        ]
    };

}());