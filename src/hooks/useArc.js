import React, { useState, useRef, useEffect } from "react";

export function useArc(element, temperature) {
    const [arc, setArc] = useState("");

    const temperatureToPercentage = (temperature) => {
        return (12 - (28 - temperature)) * 100 / 12;
    }

    const calculateArc = (tmp) => {
        const pathLength = element?.current?.getTotalLength();
        const value = temperatureToPercentage(tmp);
        setArc({
            arc: `${(value / 100) * pathLength} ${pathLength - ((value / 100) * pathLength)}`,
            offsetArc: `${(value / 100) * pathLength}`
        });
    }

    return [arc, calculateArc];
}
