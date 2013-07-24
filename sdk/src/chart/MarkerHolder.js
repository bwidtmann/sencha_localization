/**
 *
 */
Ext.define("Ext.chart.MarkerHolder", {
    extend: 'Ext.mixin.Mixin',

    mixinConfig: {
        id: 'markerHolder',
        hooks: {
            constructor: 'constructor',
            preRender: 'preRender'
        }
    },

    constructor: function () {
        this.boundMarkers = {};
    },

    /**
     *
     * @param name {String}
     * @param marker {Ext.chart.Markers}
     */
    bindMarker: function (name, marker) {
        if (marker) {
            if (!this.boundMarkers[name]) {
                this.boundMarkers[name] = [];
            }
            Ext.Array.include(this.boundMarkers[name], marker);
        }
    },

    preRender: function () {
        var boundMarkers = this.boundMarkers, boundMarkersItem,
            name, i, ln;
        for (name in this.boundMarkers) {
            if (boundMarkers[name]) {
                for (boundMarkersItem = boundMarkers[name], i = 0, ln = boundMarkersItem.length; i < ln; i++) {
                    boundMarkersItem[i].clear();
                }
            }
        }
    },

    putMarker: function (name, markerAttr) {
        var boundMarkersItem, i, ln, id = this.getId();
        if (this.boundMarkers[name]) {
            for (boundMarkersItem = this.boundMarkers[name], i = 0, ln = boundMarkersItem.length; i < ln; i++) {
                boundMarkersItem[i].putMarkerFor(id, markerAttr);
            }
        }
    }
});