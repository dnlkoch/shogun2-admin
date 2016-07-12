Ext.define('ShogunAdmin.view.tab.application.CreateOrEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.application-create-or-edit',

    onSaveClick: function() {
        Ext.toast('Changes saved!');
    },

    onCancelClick: function() {
        var me = this;

        Ext.Msg.confirm(
            'Please confirm',
            'All unsaved changes will be lost. Do you really want to quit?',
            function(choice) {
                if (choice === 'yes') {
                    var view = this.getView(),
                        viewportCtrl = view.up('mainviewport').getController();
                    //viewportCtrl.switchToView('applications');
                    viewportCtrl.redirectTo('applications');
                } else {
                    return false;
                }
            }, me
        );
    }

});
