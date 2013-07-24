Ext.define('Ext.scroll.indicator.Android4', {
    extend: 'Ext.scroll.indicator.Default',
    constructor: function() {
        this.callParent(arguments);
        this.updateLength = Ext.Function.createThrottled(this.updateLength, 75, this);
    }
});