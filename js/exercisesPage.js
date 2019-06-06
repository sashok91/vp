var pages = pages || {};
pages.exercises = pages.exercises || {};


(function () {


    var excercisesListView = {
        id: 'excercisesListView',
        type: "clean",
        paddingY: 15,
        margin: 15,
        rows: [
            {
                view: "list",
                id: 'listExercises',
                type: 'space',
                css: 'vptExercisesList transparent',
                select: true,
                item: {
                    height: 'auto',
                },
                template: function (obj) {
                    var stateClass;
                    var blockClass;
                    var startButtonHtml = '';
                    switch (obj.status) {
                        case 'completed':
                            blockClass = 'vptBlockCompleted';
                            stateClass = 'vptStateCompleted';
                            break;
                        case 'todo':
                            blockClass = 'vptBlockTodo';
                            stateClass = 'vptStateTodo';
                            startButtonHtml = '<div class="vptStartBtn">Start</div>';
                            break;
                        case 'in_progress':
                            blockClass = 'vptBlockInProgress';
                            stateClass = 'vptStateInProgress';
                            break;
                        case 'cancelled':
                            blockClass = 'vptBlockCancelled';
                            stateClass = 'vptStateCancelled';
                            break;
                    }

                    var html = '<div class="vptBlock ' + blockClass + '">' +
                                    '<div class="vptExerciseInfo">' +
                                        '<div class="vptExerciseName">' + obj.name + '</div>' +
                                        '<div class="vptExerciseSets"> 3 sets, 7 mins</div>' +
                                    '</div>' +
                                    '<div class="vptMetaInfo">' +
                                        '<div class="vptState ' + stateClass + '">' + obj.status + '</div>' +
                                        startButtonHtml +
                                    '</div>' +
                        '       </div>';
                    return html;
                },
                data: data.exercisesPage.eList,
                onClick: {
                    'vptExerciseSets': function() {
                        webix.alert('popup with info and customisation');
                    }
                }
            }
        ]
    };

    pages.exercises.layout = {
        type: "clean",
        css: 'transparent',
        id: 'pages.exercises',
        rows: [
            excercisesListView
        ]
    };

}());