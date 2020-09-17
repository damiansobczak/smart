import React, { useEffect, useRef } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/images/logo.svg";
import { TweenMax, Power2 } from "gsap";

export default function Sidebar() {
    const _refSidebar = useRef(null);

    useEffect(() => {
        TweenMax.from(_refSidebar.current, { ease: Power2.easeInOut, duration: 1, delay: 0.6, x: '-100px', opacity: 0 });
    }, []);

    return (
        <div className="sidebar" ref={_refSidebar}>
            <img src={Logo} className="sidebar__logo"></img>
            <ul className="sidebar__items">
                <li className="sidebar__item sidebar__item--active">
                    <span className="icon-home"></span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-danger"></span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-user-check"></span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-settings"></span>
                </li>
            </ul>
        </div>
    );
}
