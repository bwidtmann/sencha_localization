/**
 @classes translated static text in German
 Ext.ux.Localization determines browser language and than loads corresponding file from folder locales
 @example text: Locales.BUTTON.CANCEL
 */

Ext.define('locales.de', {
    extend: 'Ext.Base',
    alternateClassName: 'Locales',

    singleton: true,

    BUTTON: {
        BACK: 'Zurück',
        OK: 'OK',
        CANCEL: 'Abbrechen',
        YES: 'Ja',
        NO: 'Nein'
    },
    MAIN: {
        WELCOME: 'Willkommen',
        WELCOMEMESSAGE: 'Willkommensnachricht',
        WELCOMESENCHA: 'Willkommen bei Sencha Touch 2',
        WELCOMETEXT1: "Sie haben gerade ein neues Sencha Touch 2 Projekt erstellt. Was Sie hier sehen ist der Inhalt von ",
        WELCOMETEXT2: " - bearbeiten Sie diese Datei und aktualisieren Sie die Seite um Änderungen hier zu sehen.",
        GETSTARTED: 'Einführung',
        GETTINGSTARTED: 'Einführung'
    },
    LOCALIZATION: {
        AUTO: 'Automatisch',
        EN: 'Englisch',
        DE: 'Deutsch',
        CHANGELANGUAGE: 'Sprache Wechseln',
        CHANGELANGUAGEQUESTION: 'Sie müssen die Applikation neu starten, damit die neue Sprache angezeigt werden kann.'
    }
});