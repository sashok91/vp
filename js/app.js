webix.ready(function () {
    var toolbar = {
        view: "toolbar",
        id: "toolbar",
        height: 50,
        type: 'clean',
        css: 'main-toolbar',
        borderless: true,
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
            {},
            {
                view: "icon",
                icon: "mdi mdi-forum",
                css: 'chat-icon',
                click: function () {
                    webix.message('Menu click')
                }
            },
            {width: 20}
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
                    data: [
                        {id: 1, value: "Scheduled Workout", icon: "cube"},
                        {id: 2, value: "Settings", icon: "cogs"}
                    ],
                    select: true,
                    type: {
                        height: 60
                    }
                }
            ]
        }

    };

    webix.debug = true;
    webix.ui.fullScreen();

    webix.ui({
        css: 'layout',
        rows: [
            toolbar,
            {
                view: 'scrollview',
                type: 'clean',
                css: 'transparent',
                body: {
                    view: 'multiview',
                    id: 'mainMultiview',
                    type: 'clean',
                    borderless: true,
                    css: 'customize-multiview',
                    fitBiggest: true,
                    animate: false,
                    keepViews: true,
                    cells: [
                        pages.startWorkout.layout,
                        pages.customize.layout,
                        pages.exercises.layout
                    ]
                },
            },

        ]
    });
    webix.ui(sidemenu);
});
