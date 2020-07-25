import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo"></div>
            <ul className="sidebar__items">
                <li className="sidebar__item sidebar__item--active">x</li>
                <li className="sidebar__item">x</li>
                <li className="sidebar__item">x</li>
                <li className="sidebar__item">x</li>
            </ul>
        </div>
    );
}
