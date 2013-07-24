/**
 * TODO: THIS CLASS IS COPIED FROM Bar.js THUS SHALL BE REMOVED.
 */
Ext.define("Ext.chart.series.sprite.Column", {
    alias: 'sprite.columnSeries',
    extend: 'Ext.chart.series.sprite.StackedCartesian',

    inheritableStatics: {
        def: {
            processors: {
                maxBarWidth: 'number',
                minGapWidth: 'number',
                groupCount: 'number',
                groupOffset: 'number',
                inGroupGapWidth: 'number'
            },
            defaults: {
                maxBarWidth: 30,
                minGapWidth: 5,
                groupCount: 1,
                groupOffset: 0,
                inGroupGapWidth: 3,
                transformFillStroke: true
            }
        }
    },

    renderClipped: function (surface, ctx, clip) {
        var me = this,
            attr = me.attr,
            dataX = attr.dataX,
            dataY = attr.dataY,
            dataStartY = attr.dataStartY,
            groupCount = attr.groupCount,
            groupOffset = attr.groupOffset - (groupCount - 1) * 0.5,
            inGroupGapWidth = attr.inGroupGapWidth,
            startY, y,
            lineWidth = ctx.lineWidth || 1,
            matrix = attr.matrix,
            maxBarWidth = (dataX[dataX.length - 1] - dataX[0]) / (dataX.length - 1) * matrix.getXX() - lineWidth - attr.minGapWidth,
            barWidth = surface.roundPixel((Math.min(maxBarWidth, attr.maxBarWidth) - inGroupGapWidth * (groupCount - 1)) / groupCount),
            left, right, i, center,
            xx = matrix.elements[0],
            dx = matrix.elements[4],
            yy = matrix.elements[3],
            dy = surface.roundPixel(matrix.elements[5]),
            start = Math.max(0, Math.floor(clip[0])),
            end = Math.min(dataX.length - 1, Math.ceil(clip[2]));

        ctx.beginPath();
        if (dataStartY) {
            for (i = start; i <= end; i++) {
                center = dataX[i] * xx + dx + groupOffset * (barWidth + inGroupGapWidth);
                left = surface.roundPixel(center - barWidth * 0.5);
                right = surface.roundPixel(center + barWidth * 0.5);
                startY = dataStartY[i];
                y = dataY[i];
                ctx.moveTo(left, surface.roundPixel(startY * yy + lineWidth + dy));
                ctx.lineTo(left, surface.roundPixel(y * yy + lineWidth + dy));
                ctx.lineTo(right, surface.roundPixel(y * yy + lineWidth + dy));
                ctx.lineTo(right, surface.roundPixel(startY * yy + lineWidth + dy));
                ctx.lineTo(left, surface.roundPixel(startY * yy + lineWidth + dy));
            }
        } else {
            // dataStartY[i] == 0;
            for (i = start; i <= end; i++) {
                center = dataX[i] * xx + dx + groupOffset * (barWidth + inGroupGapWidth);
                left = surface.roundPixel(center - barWidth * 0.5);
                right = surface.roundPixel(center + barWidth * 0.5);
                y = dataY[i];
                ctx.moveTo(left, dy);
                ctx.lineTo(left, surface.roundPixel(y * yy + lineWidth + dy));
                ctx.lineTo(right, surface.roundPixel(y * yy + lineWidth + dy));
                ctx.lineTo(right, dy);
                ctx.lineTo(left, dy);
            }
        }
        ctx.fillStroke(attr);
    }
});
