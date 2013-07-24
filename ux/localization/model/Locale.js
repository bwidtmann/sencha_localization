/**
 * @class Ext.ux.localization.model.Locale
 * @extend Ext.data.Model
 *
 * class/model that holds the data definition for locales of LocalesStore
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * var new_locales = new Ext.ux.localization.model.Locales({lang:'en', desc: 'English'});
 *
*/
Ext.define('Ext.ux.localization.model.Locale',{
    extend: 'Ext.data.Model',
    requires: [
                'Ext.data.identifier.Sequential'
    ],
    config: {
        idProperty: 'uid',
        identifier: {
            type: 'sequential'
        },
        fields: [
            {
                name: 'uid'
            },
            {
                name: 'lang',  //language (e.g. 'en')
                type: 'string'
            },
            {
                name: 'desc', //what to display in select field localization (e.g. 'English')
                type: 'string'
            }
        ]
    }
});

