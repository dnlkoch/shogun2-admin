Ext.define('ShogunAdmin.view.container.MainContainer', {
    extend: 'Ext.container.Container',
    xtype: 'maincontainerwrap',

    requires : [
        'Ext.layout.container.HBox'
    ],

    scrollable: 'y',

    layout: {
        type: 'hbox',
        align: 'stretchmax',

        // Tell the layout to animate the x/width of the child items.
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    }

});
