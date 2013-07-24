/**
 * @class Ext.ux.localization.model.Localization
 * @extend Ext.data.Model
 *
 * class/model that holds the data definition for storing localization settings persistent in local storage of LocalizationsStore
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * var new_localization = new Ext.ux.localization.model.Localization({lang:'en', fallback: 'en', select_mode: 'auto'});
 *
*/
Ext.define('Ext.ux.localization.model.Localization',{
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.identifier.Uuid'
    ],
    config: {
        idProperty: 'uuid',
        identifier: {
            type: 'uuid'
        },
        fields: [
            {
                name: 'uuid'
            },
            {
                name: 'lang',  //language currently active (e.g. 'en')
                type: 'string'
            },
            {
                name: 'select_mode', //how to select language: can be 'auto' (= browser detection) or 'en'/'de'/... if user selects explicitly a language
                type: 'string',
                defaultValue: 'auto'
            }
        ]
    }
});

