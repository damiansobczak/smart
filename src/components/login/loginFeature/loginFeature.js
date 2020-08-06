import React, { useEffect, useRef } from "react";
import "./loginFeature.scss";
import { TweenMax, Power2 } from "gsap";

export default function LoginFeature() {
    const rect = useRef(null);

    useEffect(() => {
        TweenMax.to(rect.current, { ease: Power2.easeInOut, duration: 1, x: '-100%' });
    }, []);

    return (
        <div className="loginFeature">
            <div className="loginFeature__rect" ref={rect}></div>
        </div>
    );
}
