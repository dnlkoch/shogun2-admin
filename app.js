/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ShogunAdmin',

    extend: 'ShogunAdmin.Application',

    requires: [
        'ShogunAdmin.view.viewport.Viewport'
    ],

    // The name of the initial view to create. With the classic toolkit this
    // class will gain a "viewport" plugin if it does not extend Ext.Viewport.
    // With the modern toolkit, the main view will be added to the Viewport.
    //mainView: 'ShogunAdmin.view.main.Main'
    mainView: 'ShogunAdmin.view.viewport.Viewport'

    //-------------------------------------------------------------------------
    // Most customizations should be made to ShogunAdmin.Application. If you
    // need to customize this file, doing so below this section reduces the
    // likelihoodof merge conflicts when upgrading to new versions of Sencha
    // Cmd.
    //-------------------------------------------------------------------------
});
