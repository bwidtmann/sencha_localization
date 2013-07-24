/**
 * @class Ext.ux.Localization
 * @extend Ext.data.Store
 *
 * class/store that handles all the localization stuff. This class has to be loaded via requires before all other classes.
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * var current_language = Localization.get_lang();
 *
 * text: Localization.t('BUTTON.YES')
*/
Ext.define('Ext.ux.Localization', {
    extend: 'Ext.data.Store',
    alternateClassName: 'Localization',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.ux.LocalizationModel'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        clearOnPageLoad: false,
        model: 'Ext.ux.LocalizationModel',
        storeId: 'LocalizationStore',
        proxy: {
            type: 'localstorage',
            id: 'ux.ls'
        }
    },
    statics: {
        /**
         * initial class Ext.ux.Localization in order to create store and load locales before application loads
         * this function is called automatically every time class is loaded (application start)
         */
        Initialization: function() {
            Ext.create('Ext.ux.Localization');
            var language = this.determine_language();
            this.load_language(language);
        },
        /**
         * get localization from LocalizationStore (localstorage) or create one if LocalizationStore is empty
         * this function makes this class singleton
         * @returns {Ext.data.Model|undefined|Ext.data.Model|undefined}
         */
        get: function() {
            var store = Ext.data.StoreManager.lookup('LocalizationStore');
            var localization = store.first();  //because there can only be one localization (singleton)!
            if (localization == null){ //localization not found -> create new instance
                localization = new LocalizationModel();
                store.add(localization);
            }
            return localization;
        },
        /**
         * GETTER for field 'select_mode'
         * @returns {String} value of field 'select_mode'
         */
        get_select_mode: function() {
            return this.get().get('select_mode');
        },
        /**
         * SETTER for field 'select_mode'
         * @param {String} select_mode
         */
        set_select_mode: function(select_mode) {
            this.get().set('select_mode',select_mode);
        },
        /**
         * GETTER for field 'lang'
         * @returns {String} value of field 'lang'
         */
        get_lang: function() {
            return this.get().get('lang');
        },
        /**
         * SETTER for field 'lang'
         * @param {String} lang
         */
        set_lang: function(lang) {
            this.get().set('lang',lang);
        },
        /**
         * GETTER for field 'fallback'
         * @returns {String} value of field 'fallback'
         */
        get_fallback: function() {
            return this.get().get('fallback');
        },
        /**
         * SETTER for field 'fallback'
         * @param {String} fallback
         */
        set_fallback: function(fallback) {
            this.get().set('fallback',fallback);
        },

        /**
         * loads corresponding locales file (e.g. locales/en.js) and stores information, which language has been loaded in LocalizationStore
         * there is also implemented a fallback mechanism in case the locales file does not exist
         * @param {String} language corresponding language which should be loaded (e.g. 'en')
         */
        load_language: function(language) {
            var locales_file = 'locales/' + language + '.js';
            var locales_class = 'locales.' + language;
            //first check if corresponding file does exist
            if (this.file_exists(locales_file)) {
                Ext.require(locales_class);
            }
            else { //otherwise load fallback language
                language = this.get_fallback();
                locales_class = 'locales.' + language;
                Ext.require(locales_class);
            }
            //also make it persistent in LocalizationStore
            this.set_lang(language);
        },
        /**
         * get translated text depending on which locales file has been loaded with function load_language
         * @param {String} identifier corresponding in locales file (e.g. 'BUTTON.YES')
         * @returns {String} translated text or safe text if translation is missing
         */
        t: function(identifier) {
            try {
                return eval('Locales.' + identifier);
            }
            catch(e) {
                //translation missing -> return safe text
                return 'translation missing'
            }
        },
        /**
         * determine which language has to be loaded
         * @returns {String} language which has to be loaded (e.g. 'en')
         */
        determine_language: function() {
            if (this.get_select_mode() === 'auto') {
                return this.get_browser_language();
            }
            else {
                return this.get_select_mode();
            }
        },
        /**
         * get language from browser variables if select mode is 'auto'
         * @returns {String} language of browser (e.g. 'en')
         */
        get_browser_language: function() {
            var locale = navigator.userAgent.match(/[a-z]{2}-[a-z]{2}/); //because Android navigator.language always returns 'en'
            if (locale) {locale = locale[0]}
            locale = locale || navigator.language;
            return locale.split("-")[0];
        },
        /**
         * helper function to check if file exists before it is loaded asynchronous via Ext.require
         * @param {String} url where the file should be (e.g. 'locales/en.js')
         * @returns {Boolean} true = file exists; false = file does not exist
         */
        file_exists: function(url) {
            var req = new XMLHttpRequest();
            req.open('GET', url, false);
            req.send();
            return req.status==200;
        }
    }
},function(){this.Initialization()});