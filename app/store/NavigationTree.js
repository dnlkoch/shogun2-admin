Ext.define('ShogunAdmin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    root: {
        expanded: true,
        children: [{
            text: 'Applications',
            view: 'grid.application.List',
            iconCls: 'right-icon x-fa fa-desktop',
            routeId: 'applications',
            leaf: true
        }, {
            text: 'Layers',
            view: 'search.Results',
            leaf: true,
            iconCls: 'x-fa fa-search',
            routeId: 'search'
        }, {
            text: 'FAQ',
            view: 'pages.FAQ',
            leaf: true,
            iconCls: 'x-fa fa-question',
            routeId: 'faq'
        }, {
            text: 'Profile',
            expanded: false,
            selectable: false,
            iconCls: 'x-fa fa-user',
            routeId: 'pages-parent',
            children: [{
                text: 'Register',
                view: 'authentication.Register',
                leaf: true,
                iconCls: 'x-fa fa-pencil-square-o',
                routeId:'authentication.register'
            }, {
                text: 'Password Reset',
                view: 'authentication.PasswordReset',
                leaf: true,
                iconCls: 'x-fa fa-lightbulb-o',
                routeId:'authentication.passwordreset'
            }]
        }]
    },
    fields: [{
        name: 'text'
    }]
});
