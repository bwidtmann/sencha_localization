/**
 *
 */
Ext.define("Ext.chart.Markers", {
    extend: 'Ext.draw.sprite.Instancing',

    clear: function () {
        this.position = 0;
    },

    putMarkerFor: function (id, markerAttr) {
        var me = this;
        if (me.position >= me.instances.length) {
            me.createInstance(markerAttr);
        } else {
            me.setAttributesFor(me.position, markerAttr);
            me.position++;
        }
    }
});