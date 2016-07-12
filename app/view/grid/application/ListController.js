Ext.define('ShogunAdmin.view.grid.application.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.application-list',

    requires: [
        'ShogunAdmin.view.tab.application.CreateOrEdit'
    ],

    onFilterChange: function(filterField) {
        var grid = this.getView(),
            filters = grid.store.getFilters();

        if (filterField.value) {
            this.nameFilter = filters.add({
                id: 'nameFilter',
                property: 'name',
                value: filterField.value,
                anyMatch: true,
                caseSensitive: false
            });
        } else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },

    onCreateClick: function() {
        this.redirectTo('applications/createOrEdit');
    },

    onEditClick: function() {
        Ext.toast("Edit application");
    },

    onCopyClick: function() {
        Ext.toast("Copy application");
    },

    onDeleteClick: function() {
        Ext.toast("Delete application");
    }

});
