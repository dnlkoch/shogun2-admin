Ext.define('ShogunAdmin.view.grid.application.List',{
    extend: 'Ext.grid.Panel',

    xtype: 'application-list',

    requires: [
        'ShogunAdmin.view.grid.application.ListController',
        'ShogunAdmin.view.grid.application.ListModel'
    ],

    controller: 'application-list',

    viewModel: {
        type: 'application-list'
    },

    store: 'Application',

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }],

    bind: {
        title: '{title}'
    },

    layout: 'auto',

    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI'
    },

    tbar: [{
        xtype: 'textfield',
        fieldLabel: 'Filter by name',
        labelWidth: undefined,
        triggers: {
            clear: {
                cls: 'x-form-clear-trigger',
                handler: function(){
                    // Will trigger the change listener
                    this.reset();
                }
            }
        },
        listeners: {
            change: 'onFilterChange',
            buffer: 250
        }
    }],

    bbar: [{
        xtype: 'button',
        text: 'Create',
        listeners: {
            click: 'onCreateClick'
        }
    }, {
        xtype: 'button',
        text: 'Edit',
        listeners: {
            click: 'onEditClick'
        }
    }, {
        xtype: 'button',
        text: 'Copy',
        listeners: {
            click: 'onCopyClick'
        }
    }, {
        xtype: 'button',
        text: 'Delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }]

});
