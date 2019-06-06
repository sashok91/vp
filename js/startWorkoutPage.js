var pages = pages || {};
pages.startWorkout = pages.startWorkout || {};


(function () {

    var layout = {
        id: 'pages.startWorkout',
        type: "line",
        css: 'transparent',
        margin: 20,
        rows: [
            {
                height: 30
            },
            {
                view: 'scrollview',
                id: 'startPageScrollview',
                borderless: true,
                css: 'transparent',
                body: {
                    paddingX: 50,
                    rows: [
                        {
                            id: 'template',
                            template: function (obj) {
                                return '<div class="details-block">' +
                                    '<div class="muscules-block">' +
                                    '<span class="details-value"> Arms, Biceps, Neck </span>' +
                                    '</div>' +
                                    '<div class="estimated-time-block">' +
                                    '<span class="estimated-time-label"> Estimated time: </span>' +
                                    '<span class="estimated-time-value">47 min</span>' +
                                    '</div>' +
                                    '</div>' +
                                    '<div class="img-container">' +
                                    '<object type="image/svg+xml" data="images/MG_Men.svg" id="muscules-object" class="svg-object muscules-svg"></object>' +
                                    '</div>';
                            },
                            css: 'details-template',
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
                                "details-template": function () {
                                    $$('pages.customize').show();
                                }
                            }
                        }
                    ]
                }
            },
            {
                view: 'button',
                css: 'accent-btn',
                value: "Start Workout",

                height: 70,
                on: {
                    onItemClick() {
                        let listExercises = $$('listExercises');
                        listExercises.parse(data.exercisesPage.eList);
                        let firstExerciseId = listExercises.getFirstId();
                        let firstExercise = listExercises.getItem(firstExerciseId);
                        listExercises.select(firstExerciseId);
                        $$('previewSetsDatatable').parse(firstExercise.sets);
                        $$('exerciseNameTemplate').setValues({name: firstExercise.name});
                        $$('pages.exercises').show();
                    }
                }
            }
        ]
    };

    pages.startWorkout.layout = layout;

}());