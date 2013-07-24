Ext.define('localization_demo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.field.Select'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: Localization.t('MAIN.WELCOME'),
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: Localization.t('MAIN.WELCOMESENCHA'),
                    items: [
                        {
                            align:'right',
                            xtype:'selectfield',
                            usePicker: false,
                            value: Localization.get_select_mode(),
                            options: [
                                {
                                    text: Locales.LOCALIZATION.AUTO,
                                    value: 'auto'
                                },
                                {
                                    text: Locales.LOCALIZATION.EN,
                                    value: 'en'
                                },
                                {
                                    text: Locales.LOCALIZATION.DE,
                                    value: 'de'
                                }
                            ],
                            listeners: {
                                change: function (selectBox, newValue, oldValue, eOpts) {
                                    Localization.set_select_mode(newValue);
                                    //prompt user to restart application after changing language
                                    Ext.Msg.show({
                                        title: Localization.t('LOCALIZATION.CHANGELANGUAGE'),
                                        message: Localization.t('LOCALIZATION.CHANGELANGUAGEQUESTION'),
                                        buttons: [{text:Localization.t('BUTTON.YES'),ui:'green-dark'},{text:Localization.t('BUTTON.NO'),ui:'red-dark'}],
                                        fn: function(buttonId) {
                                            if (buttonId === Localization.t('BUTTON.YES')) {
                                                window.location.reload();
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    placeHolder: Localization.t('MAIN.WELCOMEMESSAGE')

                },
                {
                    xtype: 'button',
                    text: Localization.t('BUTTON.OK'),
                    ui: 'confirm'
                }],

                html: [
                    Localization.t('MAIN.WELCOMETEXT1'),
                    "<a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a>",
                    Localization.t('MAIN.WELCOMETEXT2')
                ].join("")
            },
            {
                title: Localization.t('MAIN.GETSTARTED'),
                iconCls: 'action',
                id: 'pnlGetStarted',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: Localization.t('MAIN.GETTINGSTARTED')
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
