var pages = pages || {};
pages.startWorkout = pages.startWorkout || {};


(function () {

    var layout = {
        type: "clean",
        css: 'transparent',
        margin: 20,
        paddingY: 30,
        rows: [
            {
                paddingX: 50,
                cols: [
                    {
                        id: 'template',
                        template: function (obj) {
                            return '<div class="details-block">' +
                                        '<div class="header"> Today\'s Workout Details</div>' +
                                        '<div class="muscules-block">' +
                                            '<span class="details-value"> Arms, Biceps, Neck </span>' +
                                        '</div>' +
                                        '<div class="img-container">' +
                                            '<object type="image/svg+xml" data="images/MG_Men.svg" id="muscules-object" class="svg-object muscules-svg"></object>' +
                                        '</div>' +
                                        '<div class="estimated-time-block">' +
                                            '<span class="estimated-time-label"> Estimated time: </span>' +
                                            '<span class="estimated-time-value">47 min</span>' +
                                        '</div>' +
                                    '</div>';
                        },
                        css: 'details-template',
                        borderless: true,
                        autoheight: true,
                        onClick:{
                            "muscules-block":function(ev, id){
                                var musculesIds = ['nack', 'backArm1', 'backArm2', 'frontArm1', 'frontArm2', 'biceps1', 'biceps2'];
                                var object = document.getElementById("muscules-object"); //получаем элмент object
                                var svgDocument = object.contentDocument; //получаем svg элемент внутри object
                                musculesIds.forEach(function (item) {
                                    var svgElement = svgDocument.getElementById(item); //получаем любой элемент внутри svg
                                    svgElement.setAttribute("fill", "red");
                                });
                            }
                        }
                    }
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
                        height: 70,
                        on: {
                            onItemClick() {
                                $$('pages.customize').show();
                            }
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
                    },
                ]
            }
        ]
    };

    pages.startWorkout.layout = {
        view: 'scrollview',
        id: 'pages.startWorkout',
        type: 'clean',
        css: 'transparent',
        body: layout
    };

}());