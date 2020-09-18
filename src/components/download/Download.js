import React from "react";
import "./Download.scss";
import Image from "../../assets/images/download-bg.svg";
import Profile from "../../assets/images/profile.jpg";

export default function Download(props) {
    return (
        <div className="download grid__col grid__col grid__col--sm-12 grid__col--md-6 grid__col--lg-3" ref={props.forwardRef()}>
            <img src={Image} className="download__decoration" alt="Download decoration" />
            <img src={Profile} className="download__profile" />
            <div className="download__title">Hello Susane!</div>
            <div className="download__info">There is new report waiting for you to download.</div>
            <button className="download__btn">
                <span className="icon-download"></span>Download week report
            </button>
        </div>
    );
}
