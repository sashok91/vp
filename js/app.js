webix.ready(function () {
    var toolbar = {
        view: "toolbar",
        id: "toolbar",
        height: 50,
        type: 'clean',
        css: 'vptTopToolbar',
        borderless: true,
        paddingX: 10,
        elements: [
            {
                view: "icon",
                icon: "mdi mdi-menu",
                css: 'vptMenuIcon',
                click: function () {
                    if ($$("menu").config.hidden) {
                        $$("menu").show();
                    } else
                        $$("menu").hide();
                }
            },
            {
                id: 'pageName',
                css: 'vptPageNameTemplate',
                template: function(obj) {
                    return '<span class="vptPageName">' + obj.pageName + '</span>';
                },
                data: { pageName: 'Today\'s workout'},
                borderless: true,
                autoheight: true
            },
            {
                view: "icon",
                icon: "mdi mdi-forum",
                css: 'vptChatIcon',
                click: function () {
                    webix.message('Menu click')
                }
            }
        ]
    };

    var sidemenu = {
        view: "sidemenu",
        id: "menu",
        width: 300,
        position: "left",
        css: "vptSideMenu",
        body: {
            rows: [
                {
                    template: '<div class="vptUserInfoBlock">' +
                        '<object type="image/svg+xml" data="images/blank-profile-picture-973460.svg" id="object" class="vptUserIcon"></object>' +
                        '<div class="vptUserName">Your Name</div>' +
                        '</div>',
                    borderless: true,
                    autoheight: true
                },
                {
                    view: "list",
                    css: 'vptMenuList',
                    borderless: true,
                    scroll: false,
                    template: "<span class='webix_icon mdi mdi-#icon#'></span> #value#",
                    select: false,
                    data: [
                        {id: 1, value: "Scheduled Workout", icon: "cube"},
                        {id: 2, value: "Settings", icon: "cogs"}
                    ],
                    type: {
                        height: 60
                    },
                    on: {
                        onItemClick(id) {
                            switch (id) {
                                case '1' :
                                    $$('pages.startWorkout').show();
                                    break;

                            }
                            $$('menu').hide();
                        }
                    }
                }
            ]
        }

    };

    webix.debug = true;


    webix.ui({
        css: 'vptLayoutWithImg',
        rows: [
            toolbar, {
                view: 'multiview',
                id: 'mainMultiview',
                css: 'vptMultiview',
                type: 'clean',
                borderless: true,
                animate: false,
                keepViews: true,
                cells: [
                    pages.startWorkout.layout,
                    pages.customize.layout,
                    pages.exercises.layout,
                    pages.currentExercise.layout
                ],
                on: {
                    onViewChange(prevId, nextId) {
                        switch (nextId) {
                            case 'pages.startWorkout':
                                $$('pageName').setValues( { pageName: 'Today\'s workout'});
                                break;
                            case 'pages.customize':
                                $$('pageName').setValues( { pageName: 'Workout customisation'});
                                break;
                            case 'pages.exercises':
                                $$('pageName').setValues( { pageName: 'Workout exercises'});
                                break;
                            case 'pages.currentExercise':
                                $$('pageName').setValues( { pageName: 'Current Exercise'});
                                break;
                            default:
                                $$('pageName').setValues( { pageName: ''});
                                break;
                        }
                    }
                }
            },

        ]
    });
    webix.ui(sidemenu);
});
webix.ui.fullScreen();