/**
 * TODO: THIS CLASS IS COPIED FROM Bar.js THUS SHALL BE REMOVED.
 */
Ext.define('Ext.chart.series.Column', {

    extend: 'Ext.chart.series.StackedCartesian',

    alias: 'series.column',
    type: 'column',
    seriesType: 'columnSeries',

    requires: ['Ext.chart.series.sprite.Column'],

    config: {
        highlightCfg: {
            lineWidth: 3,
            stroke: '#55c',
            opacity: 0.8,
            color: '#f00'
        }
    },
    
    getSprites: function () {
        var sprites = this.callSuper(arguments),
            attrs = {}, i, ln = sprites.length;

        if (this.getStacked()) {
            attrs.groupCount = 1;
            attrs.groupOffset = 0;
            for (i = 0; i < ln; i++) {
                sprites[i].setAttributes(attrs);
            }
        } else {
            attrs.groupCount = this.getYField().length;
            for (i = 0; i < ln; i++) {
                attrs.groupOffset = i;
                sprites[i].setAttributes(attrs);
            }
        }
        return sprites;
    }
});
