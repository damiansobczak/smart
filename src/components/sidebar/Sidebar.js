import React from "react";
import "./Sidebar.scss";
import Logo from "../../assets/images/logo.svg";

export default function Sidebar() {
    return (
        <div className="sidebar">
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
