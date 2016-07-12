Ext.define('ShogunAdmin.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',

    requires: [
        'Ext.list.Tree',

        'ShogunAdmin.view.container.MainContainer',
        'ShogunAdmin.view.grid.application.List'
    ],

    controller: 'mainviewport',

    viewModel: {
        type: 'mainviewport'
    },

    cls: 'sencha-dash-viewport',

    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [{
        xtype: 'toolbar',
        cls: 'viewport-header-headerbar toolbar-btn-shadow',
        height: 64,
        itemId: 'headerBar',
        items: [{
            xtype: 'image',
            reference: 'headerLogo',
            cls: 'viewport-header-logo',
            src: 'resources/images/shogun-logo-full-150px.png',
            width: 232,
            height: 43
        }, {
            xtype: 'tbspacer',
            flex: 1
        }, {
            cls: 'delete-focus-bg',
            iconCls: 'x-fa fa-th-large',
            href: '#profile',
            hrefTarget: '_self',
            tooltip: 'See your profile'
        }, {
            xtype: 'tbtext',
            cls: 'header-toolbar-text',
            bind: {
                text: '{username}'
            }
        }, {
            xtype: 'image',
            cls: 'header-right-profile-image',
            style: {
                'border-radius': '20px'
            },
            height: 35,
            width: 35,
            alt: 'current user image',
            src: 'resources/images/user-example.png'
        }]
    }, {
        xtype: 'maincontainerwrap',
        id: 'main-view-detail-wrap',
        reference: 'mainContainerWrap',
        flex: 1,
        items: [{
            xtype: 'container',
            height: '100%',
            reference: 'navigationContainer',
            layout: 'vbox',
            defaults: {
                width: 250
            },
            items: [{
                xtype: 'treelist',
                ui: 'navigation',
                reference: 'navigationTreeList',
                store: 'NavigationTree',
                expanderFirst: false,
                expanderOnly: false,
                listeners: {
                    selectionchange: 'onNavigationTreeSelectionChange'
                }
            }, {
                xtype: 'button',
                iconCls: 'x-fa fa-angle-left',
                enableToggle: true,
                toggleHandler: 'onToggleNavigationSize'
            }]
        }, {
            xtype: 'container',
            flex: 1,
            reference: 'mainCardPanel',
            cls: 'main-card-panel',
            itemId: 'contentPanel',
            layout: {
                type: 'card',
                anchor: '100%'
            }
        }]
    }]
});
