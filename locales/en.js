/**
 @classes translated static text in English
 Ext.ux.Localization determines browser language and than loads corresponding file from folder locales
 @example text: Locales.BUTTON.CANCEL
 */

Ext.define('locales.en', {
    extend: 'Ext.Base',
    alternateClassName: 'Locales',

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
        AUTO: 'Automatic',
        EN: 'English',
        DE: 'German',
        CHANGELANGUAGE: 'Change Language',
        CHANGELANGUAGEQUESTION: 'You have to reload application in order to change to new language.'
    }
});