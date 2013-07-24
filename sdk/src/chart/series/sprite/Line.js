/**
 *
 */
Ext.define("Ext.chart.series.sprite.Line", {
    alias: 'sprite.lineSeries',
    extend: 'Ext.chart.series.sprite.Aggregative',

    inheritableStatics: {
        def: {
            processors: {
                smooth: 'bool',
                step: 'bool'
            },

            defaults: {
                smooth: false,
                step: false,
                transformFillStroke: true
            }
        }
    },

    requires: ['Ext.draw.RMQ'],

    renderAggregates: function (aggregates, start, end, surface, ctx, clip, region) {
        var me = this,
            attr = me.attr,
            dataX = attr.dataX,
            matrix = attr.matrix,
            first = true,
            dataY = attr.dataY,
            smooth = attr.smooth,
            step = attr.step,
            pixel = surface.devicePixelRatio,
            xx = matrix.getXX(),
            yy = matrix.getYY(),
            dx = matrix.getDX(),
            dy = matrix.getDY(),
            markerCfg = {},
            list = [],
            lastY,
            x, y;

        for (var i = start; i < end; i++) {
            var aggregate = aggregates[i],
                minX = aggregate.minX,
                maxX = aggregate.maxX,
                minY = aggregate.minY,
                maxY = aggregate.maxY;

            if (minX < maxX) {
                list.push(markerCfg.translationX = minX * xx + dx, markerCfg.translationY = minY * yy + dy);
                this.putMarker('items', markerCfg);
                list.push(markerCfg.translationX = maxX * xx + dx, markerCfg.translationY = maxY * yy + dy);
                this.putMarker('items', markerCfg);
            } else if (minX > maxX) {
                list.push(markerCfg.translationX = maxX * xx + dx, markerCfg.translationY = maxY * yy + dy);
                this.putMarker('items', markerCfg);
                list.push(markerCfg.translationX = minX * xx + dx, markerCfg.translationY = minY * yy + dy);
                this.putMarker('items', markerCfg);
            } else {
                list.push(markerCfg.translationX = maxX * xx + dx, markerCfg.translationY = maxY * yy + dy);
                this.putMarker('items', markerCfg);
            }

            first = false;
        }
        ctx.beginPath();
        if (smooth) {
            ctx.moveTo(list[0], list[1]);
            for (i = 2; i < list.length; i += 2) {
                ctx.bezierCurveTo(
                    (list[i - 2] + list[i]) / 2, list[i - 1],
                    (list[i - 2] + list[i]) / 2, list[i + 1],
                    list[i], list[i + 1]);
            }
        } else if (step) {
            ctx.moveTo(list[0], list[1]);
            for (i = 2; i < list.length; i += 2) {
                ctx.lineTo(list[i], list[i - 1]);
                ctx.lineTo(list[i], list[i + 1]);
            }
        } else {
            ctx.moveTo(list[0], list[1]);
            for (i = 2; i < list.length; i += 2) {
                ctx.lineTo(list[i], list[i + 1]);
            }
        }
        ctx.lineTo(dataX[dataX.length - 1] * xx + dx + pixel, dataY[dataY.length - 1] * yy + dy);
        ctx.lineTo(dataX[dataX.length - 1] * xx + dx + region[2] + pixel, region[3] + 1);
        ctx.lineTo(dataX[0] * xx + dx - pixel, region[3] + 1);
        ctx.lineTo(dataX[0] * xx + dx - pixel, dataY[0] * yy + dy);
        ctx.closePath();

        ctx.fillStroke(attr);
    }
});