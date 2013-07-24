/**
 *
 */
Ext.define("Ext.chart.grid.HorizontalGridPart", {
    extend: 'Ext.draw.sprite.Sprite',

    inheritableStatics: {
        def: {
            processors: {
                x: 'number',
                y: 'number',
                width: 'number',
                height: 'number'
            },
            
            defaults: {
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                fill: 'gray',
                stroke: '#DDD'
            }
        }
    },

    render: function (surface, ctx, clipRegion) {
        var attr = this.attr,
            x = attr.x,
            y = surface.roundPixel(attr.y),
            w = attr.width,
            h = attr.height;
        ctx.beginPath();
        ctx.moveTo(clipRegion[0], y);
        ctx.lineTo(clipRegion[0] + clipRegion[2], y);
        ctx.stroke();
    }
});