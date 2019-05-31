var pages = pages || {};
pages.startWorkout = pages.startWorkout || {};


(function () {

    pages.startWorkout.layout = {
        id: 'pages.startWorkout',
        type: "clean",
        css: 'transparent',
        rows: [
            {
                height: 20
            },
            {
                template: '<div> Today\'s Workout Details',
                css: 'header-template transparent',
                borderless: true,
                autoheight: true
            },
            {
                height: 20
            },
            {
                cols: [
                    {},
                    {
                        id: 'template',
                        template: function (obj) {
                            return '<div class="details-block">' +
                                '<div class="muscules-block">' +
                                '<span class="details-value"> Arms, Biceps, Neck </span>' +
                                '</div>' +
                                '<div class="img-container"><img src="https://files.adme.ru/files/news/part_136/1363465/17446815-56-1474453775-650-dc42c8a60f-1492250575.jpg"/></div>' +
                                '<div class="estimated-time-block">' +
                                '<span class="estimated-time-label"> Estimated time: </span>' +
                                '<span class="estimated-time-value">47 min</span>' +
                                '</div>' +
                                '</div>';
                        },
                        css: 'details-block ',
                        gravity: 10,
                        borderless: true,
                        autoheight: true,
                        maxWidth: 500
                    },
                    {},
                ]
            },
            {
                height: 50
            },
            {
                cols: [
                    {
                        gravity: 1
                    },
                    {
                        view: 'button',
                        css: 'accent-btn',
                        gravity: 3,
                        value: "Start Workout",
                        height: 70
                    },
                    {
                        gravity: 1
                    }
                ]
            },
            {minHeight: 20},
            {
                template: function () {
                    return '<div>' +
                        'OR' + '<br>' +
                        'customize today\'s workout with new restrictions'
                    '</div>';
                },
                css: 'customize-info transparent',
                borderless: true,
                autoheight: true
            },
            {
                height: 20
            },
            {
                cols: [
                    {
                        gravity: 1
                    },
                    {
                        view: 'button',
                        css: 'secondary-btn',
                        gravity: 3,
                        value: "Customize",
                        height: 70
                    },
                    {
                        gravity: 1
                    }
                ]
            },
            {
                height: 50
            }
        ]
    };

}());