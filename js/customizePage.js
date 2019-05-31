var pages = pages || {};
pages.customize = pages.customize || {};


(function () {
    var toolbar = {
        view: "toolbar",
        id: "toolbar",
        height: 50,
        type: 'clean',
        css: 'main-toolbar',
        elements: [
            {
                view: "icon",
                icon: "mdi mdi-menu",
                css: 'menu-icon',
                click: function () {
                    webix.message('Menu click')
                }
            }
        ]
    };

    var intelligentView = {
        id: 'intelligentView',
        type: 'clean',
        css: 'intelligent-view',
        rows: [
            {
                view: 'form',
                css: 'opacity-form',
                margin: 15,
                elements: [
                    {
                        type: "section",
                        template: "Muscle Groups Load"
                    },
                    {
                        view: "slider",
                        css: 'custom-slider',
                        type: "alt",
                        label: "Arms",
                        value: "100",
                        title: webix.template(" #value#%"),
                        step: 50,
                        min: 50,
                        max: 200,
                        name: "s1"
                    },
                    {
                        view: "slider",
                        css: 'custom-slider',
                        type: "alt",
                        label: "Neck",
                        value: "100",
                        title: webix.template("#value#%"),
                        step: 50,
                        min: 50,
                        max: 200,
                        name: "s2"
                    },
                    {
                        type: "section",
                        template: "Common settings"
                    },
                    {
                        view: "switch",
                        css: 'custom-switch',
                        labelWidth: 300,
                        value: 1,
                        label: "Auto-Mix Workout Muscle Groups"
                    },
                    {
                        view: "switch",
                        css: 'custom-switch',
                        labelWidth: 300,
                        value: 0,
                        label: "Linear Periodization"
                    },
                    {
                        view: "switch",
                        css: 'custom-switch',
                        labelWidth: 300,
                        value: 0,
                        label: "Interval Training"
                    },
                    {
                        type: "section",
                        template: "I have a traumas"
                    },
                    {
                        view: "multiselect",
                        id: "multi",

                        label: "Traumas",
                        suggest: {
                            css: 'custom-multilist',
                            data: [
                                {id: 1, value: "knee pain"},
                                {id: 2, value: "shoulder pain"},
                                {id: 3, value: "hip dislocation"}
                            ]
                        },
                        value: "1,3"
                    },
                    {}
                ]
            },
            {},
            {
                view: 'toolbar',
                type: 'clean',
                css: 'main-toolbar',
                cols: [
                    {
                        view: 'button',
                        css: 'accent-btn',
                        gravity: 3,
                        value: "Start Workout",
                        height: 70,
                        on: {
                            onItemClick() {
                                $$('pages.exercises').show();
                            }
                        }
                    }
                ]
            }
        ]
    };

    var manualView = {
        view: 'form',
        id: 'manualView',
        elements: [
            {
                template: 'manual form',
            },
        ]
    };

    pages.customize.layout = {
        id: 'pages.customize',
        type: "clean",
        css: 'transparent',
        rows: [
            {
                view: "tabbar",
                id: "tabbar",
                type: 'clean',
                css: 'customize-tabbar',
                multiview: true,
                height: 60,
                options: [
                    {value: "Intelligent Customization", id: "intelligentView"},
                    {value: "Manual Customization", id: "manualView"}
                ]
            },
            {
                view: 'multiview',
                type: 'clean',
                css: 'customize-multiview',
                cells: [
                    intelligentView,
                    manualView
                ]
            },

        ]
    };

}());