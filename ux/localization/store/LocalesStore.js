/**
 * @class Ext.ux.localization.store.LocalesStore
 * @extend Ext.data.Store
 *
 * class/store that holds all supported languages.
 * there must be a locales file in folder 'locales' for each record in this store.
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 *
*/
Ext.define('Ext.ux.localization.store.LocalesStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.ux.localization.Config',
        'Ext.ux.localization.model.Locale'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        clearOnPageLoad: false,
        model: 'Ext.ux.localization.model.Locale',
        storeId: 'LocalesStore'
    },
    statics: {
        /**
         * initial class Ext.ux.localization.store.LocalesStore in order to create store and load locales before application loads
         * this function is called automatically every time class is loaded (application start)
         */
        Initialization: function() {
            var store = Ext.create('Ext.ux.localization.store.LocalesStore');
            //load supported languages in store from Config file
            store.setData(Ext.ux.localization.Config.supported_languages);
        }
    }
},function(){this.Initialization()});