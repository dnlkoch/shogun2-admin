Ext.define('ShogunAdmin.view.panel.application.StartView', {
    extend: 'Ext.form.Panel',

    xtype: 'application-start-view',

    requires: [
        'ShogunAdmin.view.panel.application.StartViewController',
        'ShogunAdmin.view.panel.application.StartViewModel',

        'GeoExt.component.Map'
    ],

    controller: 'application-start-view',

    viewModel: {
        type: 'application-start-view'
    },

    routeId: 'start-view',

    bind: {
        title: '{title}'
    },

    padding: 20,

    items: [{
        xtype: 'fieldset',
        autoScroll: true,
        bind: {
            title: '{title}'
        },
        defaults: {
            width: '100%'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                xtype: 'fieldset',
                flex: 1,
                margin: '0 5 0 5',
                collapsible: true,
                collapsed: true,
                border: false,
                layout: 'column',
                defaults: {
                    xtype: 'numberfield',
                    padding: '0 5 5 5',
                    columnWidth: 1/2,
                    labelAlign: 'top',
                    step: 100,
                    allowBlank: false,
                    listeners: {
                        change: 'onFormFieldChange'
                    }
                }
            },
            items: [{
                bind: {
                    title: 'Projection'
                },
                items: [{
                    xtype: 'combo',
                    name: 'mapProjection',
                    store: 'MapProjection',
                    allowBlank: false,
                    displayField: 'name',
                    valueField: 'code',
                    forceSelection: true,
                    editable: false,
                    columnWidth: 1,
                    queryMode: 'local',
                    bind: {
                        fieldLabel: 'Projection',
                        value: '{mapProjection}'
                    },
                    listeners: {
                        select: 'onMapProjectionSelect'
                    }
                }]
            }, {
                bind: {
                    title: '{mapCenterTitle}'
                },
                items: [{
                    name: 'mapCenterX',
                    bind: {
                        fieldLabel: '{mapCenterXLabel}',
                        value: '{mapCenter.x}'
                    }
                }, {
                    name: 'mapCenterY',
                    bind: {
                        fieldLabel: '{mapCenterYLabel}',
                        value: '{mapCenter.y}'
                    }
                }]
            }, {
                bind: {
                    title: '{mapZoomTitle}'
                },
                items: [{
                    columnWidth: 1/3,
                    step: 1,
                    minValue: 0,
                    name: 'mapZoom',
                    bind: {
                        fieldLabel: '{mapZoomLabel}',
                        value: '{mapZoom}'
                    }
                }, {
                    columnWidth: 1/3,
                    step: 1,
                    minValue: 0,
                    name: 'mapZoomMax',
                    bind: {
                        fieldLabel: '{mapZoomMaxLabel}',
                        value: '{mapZoomMax}'
                    }
                }, {
                    columnWidth: 1/3,
                    step: 1,
                    minValue: 0,
                    name: 'mapZoomMin',
                    bind: {
                        fieldLabel: '{mapZoomMinLabel}',
                        value: '{mapZoomMin}'
                    }
                }]
            }, {
                bind: {
                    title: '{mapExtentTitle}'
                },
                items: [{
                    readOnly: true,
                    bind: {
                        fieldLabel: '{mapExtentMinXLabel}',
                        value: '{mapExtent.minX}'
                    }
                }, {
                    readOnly: true,
                    bind: {
                        fieldLabel: '{mapExtentMinYLabel}',
                        value: '{mapExtent.minY}'
                    }
                }, {
                    readOnly: true,
                    bind: {
                        fieldLabel: '{mapExtentMaxXLabel}',
                        value: '{mapExtent.maxX}'
                    }
                }, {
                    readOnly: true,
                    bind: {
                        fieldLabel: '{mapExtentMaxYLabel}',
                        value: '{mapExtent.maxY}'
                    }
                }]
            }]
        }, {
            xtype: 'gx_map',
            height: 500,
            listeners: {
                render: 'renderMap',
                boxready: 'addMapCrossHair'
            }
        }]
    }]

});
