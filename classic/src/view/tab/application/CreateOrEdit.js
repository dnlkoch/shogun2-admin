Ext.define('ShogunAdmin.view.tab.application.CreateOrEdit', {
    extend: 'Ext.tab.Panel',

    xtype: 'application-create-or-edit',

    requires: [
        'ShogunAdmin.view.tab.application.CreateOrEditController',
        'ShogunAdmin.view.tab.application.CreateOrEditModel',
        'ShogunAdmin.view.panel.application.General',
        'ShogunAdmin.view.panel.application.Layout',
        'ShogunAdmin.view.panel.application.Layer',
        'ShogunAdmin.view.panel.application.StartView'
    ],

    controller: 'application-create-or-edit',

    viewModel: {
        type: 'application-create-or-edit'
    },

    routeId: 'createOrEdit',

    bbar: [{
        xtype: 'tbfill'
    }, {
        xtype: 'button',
        bind: {
            text: '{cancelBtnText}'
        },
        handler: 'onCancelClick'
    }, {
        xtype: 'button',
        bind: {
            text: '{saveBtnText}'
        },
        handler: 'onSaveClick'
    }],

    items: [{
        xtype: 'application-general'
    }, {
        xtype: 'application-layout'
    }, {
        xtype: 'application-start-view'
    }, {
        xtype: 'application-layer'
    }]

});
