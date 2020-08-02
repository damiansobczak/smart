import React, { useState, useEffect } from "react";
import "./Machine.scss";
import axios from "axios";

export default function Machine() {
    const [machine, setMachine] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3002/machine')
            .then(res => {
                setMachine([
                    ["energy", res.data[0].energy],
                    ["service", res.data[0].service],
                    ["warrany", res.data[0].warranty],
                    ["working", res.data[0].working]
                ]);
            });
    }, []);
    return (
        <div className="machine grid__col grid__col--sm-3">
            <h4>Machine</h4>
            <div className="machine__wrapper">
                <div className="machine__slider" style={{ transform: `translateX(${100 * slide * (-1)}%)` }}>
                    {machine.map((item, index) => (
                        <div className="machine__slide" key={index}>
                            <span className="machine__icon machine__icon--yellow icon-energy"></span>
                            <div className="machine__title">{item[0]}</div>
                            <svg width="100%" height="100%" viewBox="0 0 42 42">
                                <circle cx="21" cy="21" r="15.91549430918954" fill="#F7F9FE" stroke="#F7F9FE" strokeWidth="1.2"></circle>
                                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3546AB" strokeLinecap="round" strokeWidth="1.2" strokeDasharray="45 55" strokeDashoffset="25"></circle>
                                <text x="50%" fill="#3546AB" y="50%" dominantBaseline="middle" textAnchor="middle">{item[1]}</text>
                            </svg>
                        </div>
                    ))}
                </div>
                <div className="machine__nav">
                    <div className="machine__arrow" onClick={() => slide > 0 && setSlide(slide - 1)}>
                        <span className="icon-arrow-left"></span>
                    </div>
                    <div className="machine__arrow" onClick={() => slide < 3 && setSlide(slide + 1)}>
                        <span className="icon-arrow-right"></span>
                    </div>
                </div>
            </div>
            <div className="machine__indicators">
                <div className="machine__indicator"></div>
                <div className="machine__indicator machine__indicator--active"></div>
                <div className="machine__indicator"></div>
            </div>
        </div>
    );
}
