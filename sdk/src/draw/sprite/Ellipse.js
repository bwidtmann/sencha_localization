/**
 *
 */
Ext.define("Ext.draw.sprite.Ellipse", {
    extend: "Ext.draw.sprite.Path",
    alias: 'sprite.ellipse',
    type: 'circle',
    inheritableStatics: {
        def: {
            processors: {
                cx: "number",
                cy: "number",
                rx: "number",
                ry: "number",
                axisRotation: "number"
            },
            aliases: {
                radius: "r",
                x: "cx",
                y: "cy",
                centerX: "cx",
                centerY: "cy",
                radiusX: "rx",
                radiusY: "ry"
            },
            defaults: {
                cx: 0,
                cy: 0,
                rx: 1,
                ry: 1,
                axisRotation: 0
            },
            dirtyTriggers: {
                cx: 'path',
                cy: 'path',
                rx: 'path',
                ry: 'path',
                axisRotation: 'path'
            }
        }
    },

    getBBox: function (isWithoutTransform) {
        var attr = this.attr,
            cx = attr.cx,
            cy = attr.cy,
            rx = attr.rx,
            ry = attr.ry,
            rxy = ry / rx,
            matrix, xx, xy, yx, yy, dx, dy, w, h;

        if (isWithoutTransform) {
            return attr.bbox.plain || ( attr.bbox.plain = {
                x: cx - rx,
                y: cy - ry,
                width: rx + rx,
                height: ry + ry
            });
        } else {
            if (attr.bbox.transform) {
                return attr.bbox.transform;
            }
            matrix = attr.matrix.clone();
            matrix.postpend(1, 0, 0, rxy, 0, cy * (1 - rxy));
            xx = matrix.getXX();
            yx = matrix.getYX();
            dx = matrix.getDX();
            xy = matrix.getXY();
            yy = matrix.getYY();
            dy = matrix.getDY();
            w = Math.sqrt(xx * xx + yx * yx) * rx;
            h = Math.sqrt(xy * xy + yy * yy) * rx;
            return attr.bbox.transform = {
                x: cx * xx + cy * yx + dx - w,
                y: cx * xy + cy * yy + dy - h,
                width: w + w,
                height: h + h
            };
        }

    },
    
    drawPath: function (path, attr) {
        path.ellipse(attr.cx, attr.cy, attr.rx, attr.ry, attr.axisRotation, 0, Math.PI * 2, false);
    }
});