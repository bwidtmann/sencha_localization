/**
 * @class Ext.ux.localization.view.SelectFieldLocalization
 * @extend Ext.field.Select
 *
 * Select field that offers the user all supported languages to choose from.
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * items: [
 *     {
 *          xtype:'selectfieldlocalization',
 *          fnReload: function() {
 *                  alert('Application has to be reloaded...');
 *                  document.location.reload();
 *          }
 *     }
 * ]
 *
*/
Ext.define('Ext.ux.localization.view.SelectFieldLocalization',{
    extend: 'Ext.field.Select',
    xtype: 'selectfieldlocalization',

    config:{
        /**
         * @cfg {String} store Fill select field with all supported languages from LocalesStore
         */
        store: 'LocalesStore',
        /**
         * @cfg {String} valueField Field name in LocalesStore to hold the value
         */
        valueField: 'lang',
        /**
         * @cfg {String} displayField Field name in LocalesStore to display in select field
         */
        displayField: 'desc',
        /**
         * @cfg {String} value Pre selected language when component initializes (is retrieved from localization settings from local storage)
         */
        value: Loc.get_select_mode(),
        /**
         * @cfg {Function} fnReload Function that should be called after user has selected a language (e.g. prompt the user to reload the application)
         */
        fnReload: function() {},

        listeners: {
            change: function (selectBox, newValue, oldValue, eOpts) {
                Loc.set_select_mode(newValue);
                //prompt user to reload application after changing language
                this.getFnReload()();
            }
        }
    }
});

