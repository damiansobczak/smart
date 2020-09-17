import React, { useEffect, useRef } from "react";
import "./Core.scss";
import Grid from "../grid/Grid";
import { TweenMax, Power2 } from "gsap";

export default function Core(props) {
    const _refTitle = useRef(null);

    useEffect(() => {
        TweenMax.from(_refTitle.current, { ease: Power2.easeInOut, duration: 1, delay: 0.3, y: '30px', opacity: 0 });
    }, []);
    return (
        <div className="core">
            <h1 className="core__title" ref={_refTitle}>Dashboard</h1>
            <div className="core__wrapper">
                <Grid>{props.children}</Grid>
            </div>
        </div>
    );
}
