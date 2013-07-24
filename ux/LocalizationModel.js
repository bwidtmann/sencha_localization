Ext.define('Ext.ux.LocalizationModel',{
    extend: 'Ext.data.Model',
    alternateClassName: 'LocalizationModel',
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
                type: 'string',
                defaultValue: 'en'
            },
            {
                name: 'fallback', //language that should be loaded if locales file for current language is not available (e.g. 'en')
                type: 'string',
                defaultValue: 'en'
            },
            {
                name: 'select_mode', //how to select language: can be 'auto' (= browser detection) or 'en'/'de'/... if user selects explicitly a language
                type: 'string',
                defaultValue: 'auto'
            }
        ]
    }
});

