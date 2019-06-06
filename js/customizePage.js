var pages = pages || {};
pages.customize = pages.customize || {};


(function () {

    pages.customize.layout = {
        id: 'pages.customize',
        type: 'clean',
        css: 'vptLayoutTransparent',
        rows: [
            {
                view: 'form',
                css: 'vptForm',
                scroll: 'y',
                margin: 15,
                elementsConfig: {},
                elements: [
                    {
                        view: 'richselect',
                        css: 'vptRichselect',
                        label: 'Goal',
                        options: [
                            {id: 1, value: "Strength"},
                            {id: 2, value: "Endurance"},
                            {id: 3, value: "Weight loss"}
                        ],
                        value: "1"
                    },
                    {
                        view: "switch",
                        css: 'vptSwitch',
                        labelWidth: 230,
                        value: 1,
                        label: "Auto-Mix Workout Muscle Groups"
                    },
                    {
                        view: "switch",
                        css: 'vptSwitch',
                        labelWidth: 230,
                        value: 0,
                        label: "Linear Periodization"
                    },
                    {
                        view: "switch",
                        css: 'vptSwitch',
                        labelWidth: 230,
                        value: 0,
                        label: "Interval Training"
                    },
                    {
                        view: 'multicombo',
                        css: 'vptMulticombo',
                        label: 'Traumas',
                        suggest: {
                            css: 'vptMultilist',
                            data: [
                                {id: 1, value: "knee pain"},
                                {id: 2, value: "shoulder pain"},
                                {id: 3, value: "hip dislocation"}
                            ]
                        },
                        value: "1,3"
                    },
                    {
                        cols: [
                            {
                                view: 'multicombo',
                                css: 'vptMulticombo',
                                label: 'Muscle Groups Load',
                                labelPosition: 'top',
                                suggest: {
                                    css: 'vptMultilist',
                                    data: [
                                        {id: 'nack', value: "Nack"},
                                        {id: 'back', value: "Back"},
                                        {id: 'biceps', value: "Biceps"}
                                    ]
                                },
                                value: "nack",
                                on: {
                                    onChange: function (newv, oldv) {
                                        /*let musculesIds = ['nack', 'backArm1', 'backArm2', 'frontArm1', 'frontArm2', 'biceps1', 'biceps2'];

                                        let templateNode = $$('musculesSvg').getNode();
                                        let objects = templateNode.getElementsByTagName('object');

                                        if (objects.length) {
                                            let svgDocument = objects[0].contentDocument;
                                            musculesIds.forEach(function (item) {
                                                let svgElement = svgDocument.getElementById(item);
                                                svgElement.setAttribute("fill", "red");
                                            });
                                        }*/

                                    }
                                }
                            },
                            {
                                id: 'musculesSvg1',
                                template: function () {
                                    return '<div class="vptImgContainer">' +
                                        '<object type="image/svg+xml" data="images/MG_Men.svg"></object>' +
                                        '</div>'
                                },
                                borderless: true,
                                autoheight: true,
                                on: {
                                    onAfterRender: webix.once(function () {
                                        let node = this.getNode();
                                        let objects = node.getElementsByTagName('object');
                                        if (objects.length) {
                                            let template = this;
                                            objects[0].addEventListener("load", function () {
                                                template.resize();
                                            });
                                        }

                                    })
                                }

                            },
                        ]

                    },
                    /*
                    {
                        type: "section",
                        template: "Muscle Groups Load"
                    },*/
                    {
                        view: 'multicombo',
                        css: 'vptMulticombo',
                        label: 'Muscle Groups Load',
                        labelPosition: 'top',
                        suggest: {
                            css: 'vptMultilist',
                            data: [
                                {id: 'nack', value: "Nack"},
                                {id: 'back', value: "Back"},
                                {id: 'biceps', value: "Biceps"}
                            ]
                        },
                        value: "nack",
                        on: {
                            onChange: function (newv, oldv) {
                                /*let musculesIds = ['nack', 'backArm1', 'backArm2', 'frontArm1', 'frontArm2', 'biceps1', 'biceps2'];

                                let templateNode = $$('musculesSvg').getNode();
                                let objects = templateNode.getElementsByTagName('object');

                                if (objects.length) {
                                    let svgDocument = objects[0].contentDocument;
                                    musculesIds.forEach(function (item) {
                                        let svgElement = svgDocument.getElementById(item);
                                        svgElement.setAttribute("fill", "red");
                                    });
                                }*/

                            }
                        }
                    },
                    {
                        id: 'musculesSvg',
                        template: function () {
                            return '<div class="vptImgContainer">' +
                                '<object type="image/svg+xml" data="images/MG_Men.svg"></object>' +
                                '</div>'
                        },
                        borderless: true,
                        autoheight: true,
                        on: {
                            onAfterRender: webix.once(function () {
                                let node = this.getNode();
                                let objects = node.getElementsByTagName('object');
                                if (objects.length) {
                                    let template = this;
                                    objects[0].addEventListener("load", function () {
                                        template.resize();
                                    });
                                }

                            })
                        }

                    },
                    {}
                ]
            },
            {
                view: 'button',
                css: 'vptAccentBtn',
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
    };


}());