var pages = pages || {};
pages.exercises = pages.exercises || {};


(function () {


    var currentExerciseView = {
        id: 'currentExerciseView',
        type: 'clean',
        css: 'current-exercise-view',
        padding: 15,
        margin: 25,
        rows: [
            {
                cols: [
                    {
                        template: function(exercise) {
                            return '<div class="exercise-name-block">' +
                                '<div class="exercise-name">' + exercise.name + '</div>' +
                                '</div>';
                        },
                        data: data.exercisesPage.eList[data.exercisesPage.current],
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
                        click: function(){
                            webix.message('Modal window with information about exercise')
                        }
                    }
                ]
            },
            {
                template: 'Timer',
                hidden: true,
                height: 50,
                borderless: true,
            },
            {
                view:"toolbar",
                css: 'content-toolbar',
                margin:20,
                height:50,
                elements:[
                    { view:"button", css: 'accent-btn', type:"icon", icon:"mdi mdi-play", label:"Start Set" },
                    { view:"button", css: 'accent-btn', type:"icon", icon:"mdi mdi-stop", label:"Rest" },
                    { view:"button", css: 'accent-btn', type:"icon", icon:"mdi mdi-arrow-right-bold-outline", label:"Next Set" }
                ]
            },
            {
                view:"datatable",
                css: 'sets-datatable',
                editable: true,
                autoheight:true,
                columns:[
                    { id:"order", header:{ text:"Set", height:40, css:"multiline"}, width:40},
                    { id:"reps_plan", header:{ text:"Reps Plan", height:40, css:"multiline"}, fillspace:true},
                    { id:"reps_fact", editor:"text", css:"editable-cell", header:{ text:"Reps Fact", height:40, css:"multiline"}, fillspace:true},
                    { id:"weight_plan",   header:{ text:"Weight Plan", height:40, css:"multiline"}, fillspace:true},
                    { id:"weight_fact",  css:"editable-cell", editor:"text",  header:{ text:"Weight Fact", height:450, css:"multiline"},fillspace:true},
                    { id:"status", header:{ text:"Status", height:40, css:"multiline"}, width:60 }
                ],
                data: data.exercisesPage.eList[data.exercisesPage.current].sets
            },
            {},
            {
                view: 'toolbar',
                css: 'content-toolbar',
                cols: [
                    {},
                    {
                        view: 'button',
                        css: 'accent-btn',
                        gravity: 1,
                        value:"Finish this exercise",
                        height: 50
                    },
                ]
            }
        ]
    };

    var excercisesListView = {
        id: 'excercisesListView',
        type:"clean",
        padding: 15,
        margin: 15,
        rows: [
            {
                view: 'toolbar',
                css: 'content-toolbar',
                cols: [
                    {},
                    {
                        view: 'button',
                        css: 'accent-btn',
                        gravity: 1,
                        value:"Add exercise",
                        height: 50
                    }
                ]
            },
            {
                view:"list",
                css: 'exercises-list',
                item: {
                    height:'auto',
                },
                template: function(obj) {
                    var stateClass;
                    var blockClass;
                    switch (obj.status) {
                        case 'completed':
                            blockClass = 'block-completed';
                            stateClass = 'state-completed';
                            break;
                        case 'todo':
                            blockClass = 'block-todo';
                            stateClass = 'state-todo';
                            break;
                        case 'in_progress':
                            blockClass = 'block-in_progress';
                            stateClass = 'state-in_progress';
                            break;
                        case 'cancelled':
                            blockClass = 'block-cancelled';
                            stateClass = 'state-cancelled';
                            break;
                    }
                    //var muscules = obj.muscles.join(', ').toUpperCase();
                    var html = '<div class="block ' + blockClass + '">' +
                        '<div class="meta-info">' +
                        '<div class="state ' + stateClass + '">' + obj.status + '</div>' +
                        '</div>' +
                        '<div class="muscules-block">' + obj.name + '</div>' +
                        '<div class="template-toolbar">' + '' + '</div>'+
                        '</div>';
                    return html;
                },
                type: 'space',
                data: data.exercisesPage.eList,
                ready:function(){
                    var currentItem = this.data.find(function(obj) {
                        return obj.status === 'in_progress' || obj.status === 'todo';
                    }, true);
                    this.showItem(currentItem.id);
                },
            }
        ]
    };

    pages.exercises.layout = {
        type:"clean",
        css: 'transparent',
        id: 'pages.exercises',
        rows:[
            {
                view:"accordion",
                type:"space",
                css: 'customAccordion',
                rows:[
                    {
                        header:"Current Exercise",
                        body:currentExerciseView
                    },
                    {
                        header:"All Exercises of Todays Workout",
                        collapsed: true,
                        body:excercisesListView
                    }
                ]
            }

        ]
    };

}());