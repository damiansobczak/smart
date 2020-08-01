import React, { useState, useEffect } from "react";
import GradientPath from 'gradient-path';

export function useArc(x, y, radius, startAngle, endAngle = 0, element, temperature) {
    const [arc, setArc] = useState("");
    const [staticTemperature, setStaticTemperature] = useState(temperature);

    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    const describeArc = (x, y, radius, startAngle, endAngle, tmp = 22) => {
        endAngle = 185 - (((28 - tmp) * 8.3333) * 205 / 100) - 10;
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
        setArc(d);
    }

    return [arc, describeArc];
}
