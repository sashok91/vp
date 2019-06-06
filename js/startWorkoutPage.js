var pages = pages || {};
pages.startWorkout = pages.startWorkout || {};


(function () {

    var layout = {
        id: 'pages.startWorkout',
        type: "line",
        css: 'vptLayoutTransparent',
        margin: 20,
        rows: [
            {
                height: 30
            },
            {
                view: 'scrollview',
                id: 'startPageScrollview',
                css: 'vptLayoutTransparent',
                borderless: true,
                body: {
                    paddingX: 50,
                    rows: [
                        {
                            id: 'template',
                            template: function (obj) {
                                return '<div class="vptDetailsBlock">' +
                                    '<div class="vptMusculesBlock">' +
                                    '<span class="vptDetailsValue"> Arms, Biceps, Neck </span>' +
                                    '</div>' +
                                    '<div class="vptEstimatedTimeBlock">' +
                                    '<span class="vptEstimatedTimeLabel"> Estimated time: </span>' +
                                    '<span class="vptEstimatedTimeValue">47 min</span>' +
                                    '</div>' +
                                    '</div>' +
                                    '<div class="vptImgContainer">' +
                                    '<object type="image/svg+xml" data="images/MG_Men.svg" id="muscules-object"></object>' +
                                    '</div>';
                            },
                            css: 'vptDetailsTemplate',
                            autoheight: true,
                            on: {
                                onAfterRender: webix.once(function () {
                                    let object = document.getElementById("muscules-object");
                                    let template = this;
                                    object.addEventListener("load", function () {
                                        template.resize();
                                        let musculesIds = ['nack', 'backArm1', 'backArm2', 'frontArm1', 'frontArm2', 'biceps1', 'biceps2'];
                                        let svgDocument = this.contentDocument; //получаем svg элемент внутри object
                                        musculesIds.forEach(function (item) {
                                            let svgElement = svgDocument.getElementById(item); //получаем любой элемент внутри svg
                                            svgElement.setAttribute("fill", "red");
                                        });
                                    });
                                })
                            },
                            onClick: {
                                "vptDetailsTemplate": function () {
                                    $$('pages.customize').show();
                                }
                            }
                        }
                    ]
                }
            },
            {
                view: 'button',
                css: 'vptAccentBtn',
                value: "Start Workout",
                height: 70,
                on: {
                    onItemClick() {
                        $$('pages.exercises').show();
                    }
                }
            }
        ]
    };

    pages.startWorkout.layout = layout;

}());