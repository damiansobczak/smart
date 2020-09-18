import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/images/logo.svg";
import { TweenMax, Power2 } from "gsap";

export default function Sidebar() {
    const _refSidebar = useRef(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        TweenMax.from(_refSidebar.current, { ease: Power2.easeInOut, duration: 1, delay: 0.6, x: '-100px', opacity: 0 });
    }, []);

    return (
        <div className="sidebar" ref={_refSidebar}>
            <img src={Logo} className="sidebar__logo"></img>
            <ul className={`sidebar__items ${toggle && `sidebar__items--open`}`}>
                <li className="sidebar__item sidebar__item--active">
                    <span className="icon-home"></span>
                    <span className="sidebar__name">Dashboard</span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-danger"></span>
                    <span className="sidebar__name">Warning</span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-user-check"></span>
                    <span className="sidebar__name">Machine Check</span>
                </li>
                <li className="sidebar__item">
                    <span className="icon-settings"></span>
                    <span className="sidebar__name">Settings</span>
                </li>
            </ul>
            <button className={`sidebar__menu ${toggle && `sidebar__menu--open`}`} onClick={() => setToggle(!toggle)}>
                <span className="sidebar__menu__line"></span>
                <span className="sidebar__menu__line"></span>
                <span className="sidebar__menu__line"></span>
            </button>
        </div>
    );
}
