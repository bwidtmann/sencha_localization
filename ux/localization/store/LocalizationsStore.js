/**
 * @class Ext.ux.localization.store.LocalizationsStore
 * @extend Ext.data.Store
 *
 * class/store that holds settings for localization persistent in local storage.
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 *
*/
Ext.define('Ext.ux.localization.store.LocalizationsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.ux.localization.model.Localization',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        clearOnPageLoad: false,
        model: 'Ext.ux.localization.model.Localization',
        storeId: 'LocalizationsStore',
        proxy: {
            type: 'localstorage',
            id: 'ux.ls'
        }
    },
    statics: {
        /**
         * initial class Ext.ux.localization.store.LocalizationsStore in order to create store and load locales before application loads
         * this function is called automatically every time class is loaded (application start)
         */
        Initialization: function() {
            Ext.create('Ext.ux.localization.store.LocalizationsStore');
        }
    }
},function(){this.Initialization()});