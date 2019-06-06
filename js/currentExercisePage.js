var pages = pages || {};
pages.currentExercise = pages.currentExercise || {};


(function () {
    var intervalId;

    function startTimer(duration, timerView, callback) {
        var timer = duration, minutes, seconds;

        clearInterval(intervalId);

        return intervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerView.setValues({time: minutes + ":" + seconds});
            timerView.show();

            if (--timer < 0) {
                clearInterval(intervalId);
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }
        }, 1000);
    }

    function cancelTimer() {
        $$('timer').hide();
        $$('message').hide();
        clearInterval(intervalId);
    }

/*    // update after changing exercise
    function updateCurrentExerciseAccordionItem(currentExercise) {
        if (!currentExercise) {
            return;
        }
        let previewDatatable = $$('previewSetsDatatable');
        previewDatatable.clearAll();
        previewDatatable.parse(currentExercise.sets);
        $$('exerciseNameTemplate').setValues({name: currentExercise.name});
        $$('exerciseTodoView').show();
        $$('currentExerciseAccordionItem').expand();
    }*/

    function getSetByStatus(status) {
        let setsDatatable = $$('editableSetsDatatable');
        return setsDatatable.find(function(set){
            return set.status === status;
        }, true );
    }

    function finishExerciseAndGoNext() {
        let excercisesListView = $$('listExercises');

        let currentExercise = excercisesListView.getSelectedItem();
        currentExercise.status = 'completed';
        excercisesListView.refresh();

        let nextExercise = excercisesListView.find(function(exercise){
            return exercise.status === 'todo';
        }, true );
        if (nextExercise) {
            excercisesListView.select(nextExercise.id);
        } else {
            webix.message('There are no more exercises! Your workout is completed!');
        }

        cancelTimer();
    }

    var exerciseInProgressView = {
        id: 'exerciseInProgressView',
        type: 'line',
        margin: 25,
        rows: [
            {
                template: function (obj) {
                    return '<div class="timer-container">' +
                        '<span>' + obj.time + '</span>' +
                        '</div>';
                },
                id: 'timer',
                css: 'timer-template',
                data: {time: ''},
                height: 40,
                hidden: true,
                borderless: true
            },
            {
                template: function (obj) {
                    return '<div>' +
                        '<span>' + obj.message + '</span>' +
                        '</div>';
                },
                id: 'message',
                css: 'info-template',
                data: {message: ''},
                hidden: true,
                autoheight: true,
                borderless: true
            },
            {
                view: "toolbar",
                css: 'content-toolbar',
                margin: 20,
                height: 50,
                borderless: true,
                elements: [
                    {
                        view: "button",
                        id: 'startTimerButton',
                        css: 'accent-btn',
                        ype: "icon",
                        icon: "mdi mdi-play",
                        label: "Start Set",
                        hidden: true,
                        on: {
                            onItemClick() {
                                let timerView = $$('timer');

                                let messageTemplate = $$('message');
                                //messageTemplate.setValues({message: 'Set in progress...'});
                                messageTemplate.hide();

                                let currentSet = getSetByStatus('in_progress');
                                if (currentSet) {
                                    startTimer(currentSet.SuggestedExerciseTime, timerView, function () {
                                        timerView.hide();
                                        let messageTemplate = $$('message');
                                        messageTemplate.setValues({message: 'The set is over! Take a rest!'});
                                        messageTemplate.show();
                                    })
                                }

                            }
                        }
                    },
                    {
                        view: "button",
                        css: 'accent-btn',
                        type: "icon",
                        icon: "mdi mdi-stop",
                        label: "Rest",
                        on: {
                            onItemClick() {
                                let timerView = $$('timer');

                                let messageTemplate = $$('message');
                                //messageTemplate.setValues({message: 'Rest...'});
                                messageTemplate.hide();

                                startTimer(currentSet.SuggestedRestTime, timerView, function () {
                                    timerView.hide();
                                    let messageTemplate = $$('message');
                                    messageTemplate.setValues({message: 'The rest is over! You are ready to start the next set!'});
                                    messageTemplate.show();
                                })
                            }
                        }
                    },
                    {
                        view: "button",
                        id: 'nextSetButton',
                        css: 'accent-btn',
                        type: "icon",
                        icon: "mdi mdi-arrow-right-bold-outline",
                        label: "Next Set",
                        on: {
                            onItemClick() {
                                /*let messageTemplate = $$('message');
                                messageTemplate.setValues({message: 'Are you ready to start a new set?'});
                                messageTemplate.show();*/

                                let currentSet = getSetByStatus('in_progress');
                                currentSet.status = 'completed';

                                let setsDatatable = $$('editableSetsDatatable');
                                setsDatatable.updateItem(currentSet.id, currentSet);

                                cancelTimer();

                                let nextSet = getSetByStatus('todo');
                                if (nextSet) {
                                    nextSet.status = 'in_progress';
                                    setsDatatable.updateItem(nextSet.id, nextSet);
                                } else {
                                    this.hide();
                                    $$('nextExerciseButton').show();
                                }

                            }
                        }
                    },
                    {
                        view: "button",
                        id: 'nextExerciseButton',
                        css: 'accent-btn',
                        type: "icon",
                        hidden: true,
                        icon: "mdi mdi-arrow-right-bold-outline",
                        label: "Next Exercise",
                        on: {
                            onItemClick() {
                                finishExerciseAndGoNext();
                            }
                        }
                    }
                ]
            },
            {
                view: "datatable",
                id: 'editableSetsDatatable',
                css: 'sets-datatable',
                editable: true,
                autoheight: true,
                scheme: {
                    $change: function (item) {
                        let cellClass;
                        switch (item.status) {
                            case 'completed':
                                cellClass = 'cell-completed';
                                break;
                            case 'in_progress':
                                cellClass = 'cell-in_progress';
                                break;
                        }
                        item.$css = cellClass;
                    }
                },
                columns: [
                    {id: "OrderNumber", header: {text: "Set", height: 40, css: "multiline"}, width: 40},
                    {
                        id: "SuggestedExerciseTime",
                        header: {text: "Exercise Time Plan", height: 40, css: "multiline"},
                        fillspace: true
                    },
                    {
                        id: "ActualExerciseTime",
                        css: "editable-cell",
                        editor: "text",
                        header: {text: "Exercise Time Fact", height: 450, css: "multiline"},
                        fillspace: true
                    },
                    {
                        id: "SuggestedReps",
                        header: {text: "Reps Plan", height: 40, css: "multiline"},
                        fillspace: true,
                        template: function (item) {
                            if (typeof item.SuggestedRepsMin !== 'undefined' && typeof item.SuggestedRepsMax !== 'undefined') {
                                return item.SuggestedRepsMin + '-' + item.SuggestedRepsMax;
                            } else if (typeof item.SuggestedRepsMin == 'undefined' && typeof item.SuggestedRepsMax == 'undefined') {
                                return 0;
                            } else if (typeof item.SuggestedRepsMin == 'undefined') {
                                return item.SuggestedRepsMax;
                            } else {
                                return item.SuggestedRepsMin;
                            }
                        }
                    },
                    {
                        id: "ActualReps",
                        editor: "text",
                        css: "editable-cell",
                        header: {text: "Reps Fact", height: 40, css: "multiline"},
                        fillspace: true
                    },
                    {
                        id: "SuggestedWeight",
                        header: {text: "Weight Plan", height: 40, css: "multiline"},
                        fillspace: true
                    },
                    {
                        id: "ActualWeight",
                        css: "editable-cell",
                        editor: "text",
                        header: {text: "Weight Fact", height: 450, css: "multiline"},
                        fillspace: true
                    },
                    {id: "status", header: {text: "Status", height: 40, css: "multiline"}, width: 60}
                ],
                on: {
                    onBeforeLoad() {
                        let exercisesList = $$('listExercises');
                        let currentExercise = exercisesList.getSelectedItem();
                        if (currentExercise && currentExercise.type === 'time') {
                            this.showColumn('SuggestedExerciseTime');
                            this.showColumn('ActualExerciseTime');
                            this.hideColumn('SuggestedReps');
                            this.hideColumn('ActualReps');
                            this.hideColumn('SuggestedWeight');
                            this.hideColumn('ActualWeight');
                        } else if (currentExercise && currentExercise.type === 'reps'){
                            this.hideColumn('SuggestedExerciseTime');
                            this.hideColumn('ActualExerciseTime');
                            this.showColumn('SuggestedReps');
                            this.showColumn('ActualReps');
                            this.showColumn('SuggestedWeight');
                            this.showColumn('ActualWeight');
                        }
                    },
                    onAfterLoad() {
                        let firstSet = this.getItem(this.getFirstId());
                        if (firstSet) {
                            firstSet.status = 'in_progress';
                            this.updateItem(firstSet.id, firstSet);
                        }
                    }
                }
            },
            {},
            {
                view: 'toolbar',
                css: 'content-toolbar',
                borderless: true,
                cols: [
                    {},
                    {
                        view: 'button',
                        css: 'accent-btn',
                        value: "Finish exercise",
                        height: 50,
                        on: {
                            onItemClick() {
                                finishExerciseAndGoNext();
                            }
                        }
                    },
                ]
            }
        ]
    };

    var currentExerciseView = {
        id: 'currentExerciseView',
        type: 'line',
        css: 'current-exercise-view',
        padding: 15,
        margin: 25,
        rows: [
            {
                cols: [
                    {
                        id: "exerciseNameTemplate",
                        template: function (exercise) {
                            return '<div class="exercise-name-block">' +
                                '<div class="exercise-name">' + exercise.name + '</div>' +
                                '</div>';
                        },
                        data: {name: ''},
                        borderless: true,
                        autoheight: true
                    },
                    {
                        //view: "button",
                        view: 'icon',
                        icon: "mdi mdi-information",
                        css: 'info-icon',
                        height: 40,
                        width: 40,
                        click: function () {
                            webix.message('Modal window with information about exercise')
                        }
                    }
                ]
            },
            exerciseInProgressView
        ]
    };


    pages.currentExercise.layout = {
        type: "clean",
        css: 'transparent',
        id: 'pages.currentExercise',
        rows: [
             currentExerciseView
        ]
    };

}());