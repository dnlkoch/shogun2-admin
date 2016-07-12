Ext.define('ShogunAdmin.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewport',

    listen : {
        controller : {
            '#': {
                unmatchedroute : 'onRouteChange'
            }
        }
    },

    routes: {
        ':node': 'onRouteChange',
        'applications/:createOrEdit': 'switchToView'
    },

    componentMap: {
        'createOrEdit': 'ShogunAdmin.view.tab.application.CreateOrEdit'
    },

    switchToView: function(hashTag) {
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            viewToCreate = me.componentMap[hashTag],
            newView;

        newView = Ext.create(viewToCreate, {
            routeId: hashTag
        });

        Ext.suspendLayouts();
        mainLayout.setActiveItem(mainCard.add(newView));
        Ext.resumeLayouts(true);
    },

    setCurrentView: function(hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel,
            mainLayout = mainCard.getLayout(),
            navigationList = refs.navigationTreeList,
            viewModel = me.getViewModel(),
            vmData = viewModel.getData(),
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag),
            view = node ? node.get('view') : null,
            lastView = vmData.currentView,
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            newView;

        // kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!existingItem) {
            var viewToCreate = 'ShogunAdmin.view.' +
                    (view || 'pages.Error404Window');
            newView = Ext.create(viewToCreate, {
                hideMode: 'offsets',
                routeId: hashTag
            });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView
            // isWindow we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            } else {
                // newView is set (did not exist already), so add it and make
                // it the activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        vmData.currentView = newView;
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        if (node && node.get('view')) {
            this.redirectTo(node.get("routeId"));
        }
    },

    onToggleNavigationSize: function (btn, pressedState) {
        var me = this,
            navContainer = me.getReferences().navigationContainer,
            navList = navContainer.down('treelist'),
            navContainerItems = navContainer.getRefItems(),
            collapsed = pressedState,
            width = collapsed ? 64 : 250;

        navList.setMicro(collapsed);

        Ext.each(navContainerItems, function(item) {
            item.setWidth(width);
        });

        if (collapsed) {
            btn.setIconCls('x-fa fa-angle-right');
        } else {
            btn.setIconCls('x-fa fa-angle-left');
        }
    },

    onMainViewRender: function() {
        if (!window.location.hash) {
            this.redirectTo('applications');
        }
    },

    onRouteChange: function(id){
        this.setCurrentView(id);
    },

    onSearchRouteChange: function () {
        this.setCurrentView('search');
    },

    onEmailRouteChange: function () {
        this.setCurrentView('email');
    }
});
