webix.ready(function () {
    var toolbar = {
        view: "toolbar",
        id: "toolbar",
        height: 50,
        type: 'clean',
        css: 'main-toolbar',
        borderless: true,
        margin: 20,
        paddingX: 20,
        elements: [
            {
                view: "icon",
                icon: "mdi mdi-menu",
                css: 'menu-icon',
                click: function () {
                    if ($$("menu").config.hidden) {
                        $$("menu").show();
                    } else
                        $$("menu").hide();
                }
            },
            {
                id: 'pageName',
                css: 'page-name-template',
                template: function(obj) {
                    return '<span class="page-name">' + obj.pageName + '</span>';
                },
                data: { pageName: 'Today\'s workout'},
                borderless: true,
                autoheight: true
            },
            {
                view: "icon",
                icon: "mdi mdi-forum",
                css: 'chat-icon',
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
        css: "my_menu",
        body: {
            rows: [
                {
                    template: '<div class="user-info-block">' +
                        '<object type="image/svg+xml" data="images/blank-profile-picture-973460.svg" id="object" class="user-icon"></object>' +
                        '<div class="user-name">Your Name</div>' +
                        '</div>',
                    borderless: true,
                    autoheight: true
                },
                {
                    view: "list",
                    css: 'menu-list',
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
        css: 'layout',
        rows: [
            toolbar, {
                view: 'multiview',
                id: 'mainMultiview',
                type: 'clean',
                borderless: true,
                css: 'customize-multiview',
                animate: false,
                keepViews: true,
                cells: [
                    pages.startWorkout.layout,
                    pages.customize.layout,
                    pages.exercises.layout
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