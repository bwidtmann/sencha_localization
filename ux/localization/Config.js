/**
 * @class Ext.ux.localization.Config
 * @extend Ext.Base
 *
 * Singleton class that holds all localization configs
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * var fallback = Ext.ux.localization.Config.fallback;
 *
*/

Ext.define('Ext.ux.localization.Config', {
    extend: 'Ext.Base',
    requires: [
        'locales.en',
        'locales.de'
        //add new locales files here...
    ],
    singleton: true,

    supported_languages: [
                {lang: 'auto', desc: 'Automatic'},
                {lang: 'en', desc: 'English'},   //file locales/en.js must exist
                {lang: 'de', desc: 'German'}     //file locales/de.js must exist
                //add more records in order to support more different languages (dont forget to add the locales file!)
            ],
    fallback: 'en', //language that should be used if locales file for current language is not available or translation is missing
    safe_text: 'translation missing' //text to be displayed if even in fallback language translation is missing

});