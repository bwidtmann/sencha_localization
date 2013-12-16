/**
 * @class Ext.ux.Localization
 * @extend Ext.Base
 *
 * Singleton class that handles all the localization stuff. This class has to be loaded via requires before all other classes.
 * @author Bernhard Widtmann
 * @notes used in www.smart-order.com
 * @example
 *
 * var current_language = Loc.get_lang();
 *
 * text: Loc.t('BUTTON.YES')
*/
Ext.define('Ext.ux.Localization', {
    extend: 'Ext.Base',
    alternateClassName: 'Loc',
    requires: [
        'Ext.ux.localization.store.LocalesStore',
        'Ext.ux.localization.store.LocalizationsStore'
    ],
    singleton: true,

    /**
     * initial class Ext.ux.Localization in order to load locales before application loads
     * this function is called automatically every time class is loaded (application start)
     */
    Initialization: function() {
        var language = this.determine_language();
        this.load_language(language);
    },
    /**
     * get localization from LocalizationsStore (localstorage) or create one if LocalizationsStore is empty
     * this function makes this class singleton
     * @returns {Ext.data.Model} retrieved model instance of localization
     */
    get: function() {
        var store = Ext.data.StoreManager.lookup('LocalizationsStore');
        var localization = store.first();  //because there can only be one localization (singleton)!
        if (localization == null){ //localization not found -> create new instance
            localization = new Ext.ux.localization.model.Localization();
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
     * check if corresponding language is supported (exists in LocalesStore) and stores information, which language has been loaded in LocalizationsStore
     * there is also implemented a fallback mechanism in case the language is not supported (exists in LocalesStore)
     * @param {String} language corresponding language which should be loaded (e.g. 'en')
     */
    load_language: function(language) {
        //check if language is supported (exists in LocalesStore)
        var locales_store = Ext.data.StoreManager.lookup('LocalesStore');
        if (!locales_store.getAt(locales_store.findExact('lang',language))) {
            //language does not exist in LocalesStore -> so there is no translation for it!
            //->load fallback language
            language = Ext.ux.localization.Config.fallback;
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

            return eval('locales.' + this.get_lang() + '.' + identifier).toString();
        }
        catch(e) {
            //translation missing -> look up in fallback language
            try {
                return eval('locales.' + Ext.ux.localization.Config.fallback + '.' + identifier).toString();
            }
            catch(e) {
                return Ext.ux.localization.Config.safe_text
            }
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
    }
},function(){this.Initialization()});