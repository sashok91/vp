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

    var currentExercise = data.exercisesPage.eList[3];

    var exerciseInProgressView = {
        id: 'exerciseInProgressView',
        css: 'vptExerciseInprogressLayout',
        margin: 25,
        padding: 10,
        rows: [
            {
                type: 'clean',
                cols: [
                    {
                        id: "exerciseNameTemplate",
                        template: function (exercise) {
                            return '<div class="vptExerciseName">' + exercise.name + '</div>';
                        },
                        data: {name: currentExercise.name},
                        borderless: true,
                        autoheight: true
                    },
                    {
                        //view: "button",
                        view: 'icon',
                        icon: "mdi mdi-information",
                        css: 'vptInfoIcon',
                        height: 40,
                        width: 40,
                        click: function () {
                            webix.message('Modal window with information about exercise')
                        }
                    }
                ]
            },
            {
                template: function (obj) {
                    return '<div class="vptTimerContainer">' +
                        '<div class="vptEstimatedTime">Estimated time for set: ' + obj.estimatedTime + '</div>' +
                        '<div class="vptTime">'+obj.time+'</div>' +
                        '</div>';
                },
                id: 'timer',
                css: 'vptTimerTemplate',
                data: {time: '00:00', estimatedTime: '01:40' },
                autoheight: true,
                borderless: true
            },
            {
                view: "toolbar",
                css: 'vptContentToolbar',
                margin: 20,
                height: 50,
                borderless: true,
                elements: [
                    {
                        view: "button",
                        id: 'startTimerButton',
                        css: 'vptAccentBtn',
                        type: "icon",
                        icon: "mdi mdi-play",
                        label: "Start Set",
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
                        css: 'vptAccentBtn',
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
                        css: 'vptAccentBtn',
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
                        css: 'vptAccentBtn',
                        type: "icon",
                        hidden: true,
                        icon: "mdi mdi-arrow-right-bold-outline",
                        label: "Next Exercise",
                        on: {
                            onItemClick() {
                                //finishExerciseAndGoNext();
                            }
                        }
                    }
                ]
            },
            {
                view: "datatable",
                id: 'editableSetsDatatable',
                css: 'vptDatatable',
                editable: true,
                autoheight: true,
                scheme: {
                    $change: function (item) {
                        let cellClass;
                        switch (item.status) {
                            case 'completed':
                                cellClass = 'vptCellCompleted';
                                break;
                            case 'in_progress':
                                cellClass = 'vptCellInProgress';
                                break;
                        }
                        item.$css = cellClass;
                    }
                },
                columns: [
                    {id: "OrderNumber", header: {text: "Set", height: 40, css: "vptMultiline"}, width: 40},
                    {
                        id: "SuggestedExerciseTime",
                        header: {text: "Exercise Time Plan", height: 40, css: "vptMultiline"},
                        fillspace: true
                    },
                    {
                        id: "ActualExerciseTime",
                        css: "vptEditableCell",
                        editor: "text",
                        header: {text: "Exercise Time Fact", height: 450, css: "vptMultiline"},
                        fillspace: true
                    },
                    {
                        id: "SuggestedReps",
                        header: {text: "Reps Plan", height: 40, css: "vptMultiline"},
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
                        css: "vptEditableCell",
                        header: {text: "Reps Fact", height: 40, css: "vptMultiline"},
                        fillspace: true
                    },
                    {
                        id: "SuggestedWeight",
                        header: {text: "Weight Plan", height: 40, css: "vptMultiline"},
                        fillspace: true
                    },
                    {
                        id: "ActualWeight",
                        css: "vptEditableCell",
                        editor: "text",
                        header: {text: "Weight Fact", height: 450, css: "vptMultiline"},
                        fillspace: true
                    },
                    {id: "SuggestedRestTime", header: {text: "Rest", height: 40, css: "vptMultiline"}, width: 60}
                ],
                data: currentExercise.sets,
                on: {
                    onViewShow() {
                        if (currentExercise && currentExercise.type === 'time') {
                            this.showColumn('SuggestedExerciseTime');
                            this.showColumn('ActualExerciseTime');
                            this.hideColumn('SuggestedReps');
                            this.hideColumn('ActualReps');
                            this.hideColumn('SuggestedWeight');
                            this.hideColumn('ActualWeight');
                        } else if (currentExercise && currentExercise.type === 'reps') {
                            this.hideColumn('SuggestedExerciseTime');
                            this.hideColumn('ActualExerciseTime');
                            this.showColumn('SuggestedReps');
                            this.showColumn('ActualReps');
                            this.showColumn('SuggestedWeight');
                            this.showColumn('ActualWeight');
                        }
                    },
                    /*onBeforeLoad() {
                        debugger;
                        if (currentExercise && currentExercise.type === 'time') {
                            this.showColumn('SuggestedExerciseTime');
                            this.showColumn('ActualExerciseTime');
                            this.hideColumn('SuggestedReps');
                            this.hideColumn('ActualReps');
                            this.hideColumn('SuggestedWeight');
                            this.hideColumn('ActualWeight');
                        } else if (currentExercise && currentExercise.type === 'reps') {
                            this.hideColumn('SuggestedExerciseTime');
                            this.hideColumn('ActualExerciseTime');
                            this.showColumn('SuggestedReps');
                            this.showColumn('ActualReps');
                            this.showColumn('SuggestedWeight');
                            this.showColumn('ActualWeight');
                        }
                    },*/
                    onAfterLoad() {
                        let firstSet = this.getItem(this.getFirstId());
                        if (firstSet) {
                            firstSet.status = 'in_progress';
                            this.updateItem(firstSet.id, firstSet);
                        }
                    }
                }
            },
            {
                view: 'form',
                css: 'vptForm',
                borderless: true,
                margin: 20,
                elementsConfig: {
                    labelWidth: 150
                },
                elements: [
                    {
                        view: "slider",
                        css: 'vptSlider',
                        type: "alt",
                        value: "100",
                        label: 'Exercise Load',
                        title: webix.template(" #value#%"),
                        step: 50,
                        min: 50,
                        max: 200,
                        name: "s1"
                    },
                    {
                        view: 'richselect',
                        css: 'vptRichselect',
                        label: 'Exercise Focus',
                        options: [
                            {id: 1, value: "Strength"},
                            {id: 2, value: "Endurance"},
                            {id: 3, value: "Weight loss"}
                        ],
                        value: "1"
                    },
                ]
            },
            {},
            {
                view: 'toolbar',
                css: 'vptContentToolbar',
                borderless: true,
                cols: [
                    {},
                    {
                        view: 'button',
                        css: 'vptAccentBtn',
                        value: "Finish exercise",
                        height: 50,
                        on: {
                            onItemClick() {
                            }
                        }
                    },
                ]
            }
        ]
    };

    {}

    pages.currentExercise.layout = {
        view: 'scrollview',
        id: 'pages.currentExercise',
        css: 'vptLayoutTransparent',
        body: {
            type: 'line',
            css: 'vptCurrentExerciseView',
            padding: 5,
            rows: [
                exerciseInProgressView
            ]
        }


    };


}());