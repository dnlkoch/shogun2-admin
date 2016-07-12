Ext.define('ShogunAdmin.view.panel.application.Layer', {
    extend: 'Ext.panel.Panel',

    xtype: 'application-layer',

    requires: [
        'ShogunAdmin.view.panel.application.LayerController',
        'ShogunAdmin.view.panel.application.LayerModel'
    ],

    controller: 'application-layer',

    viewModel: {
        type: 'application-layer'
    },

    routeId: 'layer',

    bind: {
        title: '{title}'
    },

    padding: 20,

    items: [{
        xtype: 'fieldset',
        bind: {
            title: '{title}'
        },
        defaults: {
            width: '100%',
            msgTarget: 'side'
        },
        items: [{
            xtype: 'gridpanel',
            title: 'Available layers'
        }]
    }]

});
