import React from "react";
import "./Download.scss";
import Image from "../../assets/images/download-bg.svg";
import Profile from "../../assets/images/profile.jpg";

export default function Download() {
    return (
        <div className="download grid__col grid__col--sm-3">
            <img src={Image} class="download__decoration" alt="Download decoration" />
            <img src={Profile} className="download__profile" />
            <div className="download__title">Hello Susane!</div>
            <div className="download__info">There is new report waiting for you to download.</div>
            <button className="download__btn">
                <span className="icon-download"></span>Download week report
            </button>
        </div>
    );
}
