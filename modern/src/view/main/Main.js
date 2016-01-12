/**
 * This class is the main view for the application. It is specified in
 * app.js as the "mainView" property. That setting automatically applies
 * the "viewport" plugin causing this view to become the body element
 * (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your
          application.
 */
Ext.define('ShogunAdmin.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'ShogunAdmin.view.main.MainController',
        'ShogunAdmin.view.main.MainModel',
        'ShogunAdmin.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's
            // grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
