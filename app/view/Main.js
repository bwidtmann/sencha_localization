Ext.define('localization_demo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.ux.localization.view.SelectFieldLocalization'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: Loc.t('MAIN.WELCOME'),
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: Loc.t('MAIN.WELCOMESENCHA'),
                    items: [
                        {
                            align:'right',
                            xtype:'selectfieldlocalization',
                            usePicker: false,
                            fnReload: function() {
                                //prompt user to restart application after changing language
                                Ext.Msg.show({
                                    title: Loc.t('LOCALIZATION.CHANGELANGUAGE'),
                                    message: Loc.t('LOCALIZATION.CHANGELANGUAGEQUESTION'),
                                    buttons: [{text:Loc.t('BUTTON.YES'),ui:'green-dark'},{text:Loc.t('BUTTON.NO'),ui:'red-dark'}],
                                    fn: function(buttonId) {
                                        if (buttonId === Loc.t('BUTTON.YES')) {
                                            window.location.reload();
                                        }
                                    }
                                });
                            }
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    placeHolder: Loc.t('MAIN.WELCOMEMESSAGE')

                },
                {
                    xtype: 'button',
                    text: Loc.t('BUTTON.OK'),
                    ui: 'confirm'
                }],

                html: [
                    Loc.t('MAIN.WELCOMETEXT1'),
                    "<a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a>",
                    Loc.t('MAIN.WELCOMETEXT2')
                ].join("")
            },
            {
                title: Loc.t('MAIN.GETSTARTED'),
                iconCls: 'action',
                id: 'pnlGetStarted',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: Loc.t('MAIN.GETTINGSTARTED')
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
