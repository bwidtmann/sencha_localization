/**
 @classes singleton class which holds all translated static text in English
 Ext.ux.Localization determines language and than uses corresponding file from folder locales
 @example text: Loc.t('BUTTON.CANCEL')
 */

Ext.define('locales.en', {
    extend: 'Ext.Base',

    singleton: true,

    BUTTON: {
        BACK: 'Back',
        OK: 'OK',
        CANCEL: 'Cancel',
        YES: 'Yes',
        NO: 'No'
    },
    MAIN: {
        WELCOME: 'Welcome',
        WELCOMEMESSAGE: 'Welcome message',
        WELCOMESENCHA: 'Welcome to Sencha Touch 2',
        WELCOMETEXT1: "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the contents of ",
        WELCOMETEXT2: " - edit that file and refresh to change what's rendered here.",
        GETSTARTED: 'Get Started',
        GETTINGSTARTED: 'Getting Started'
    },
    LOCALIZATION: {
        CHANGELANGUAGE: 'Change Language',
        CHANGELANGUAGEQUESTION: 'You have to reload application in order to change to new language.'
    }
});