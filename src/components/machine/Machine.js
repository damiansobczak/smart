import React, { useState, useEffect } from "react";
import "./Machine.scss";
import axios from "axios";

export default function Machine(props) {
    const [machine, setMachine] = useState([]);
    const [slide, setSlide] = useState(0);

    const changeSlide = (action) => {
        switch (action) {
            case 'INCREMENT':
                if (slide < machine.length - 1) {
                    setSlide(slide + 1);
                    break;
                } else {
                    setSlide(0);
                    break;
                }
            case 'DECREMENT':
                if (slide > 0) {
                    setSlide(slide - 1);
                    break;
                } else {
                    setSlide(machine.length - 1);
                    break;
                }
        }
    }

    useEffect(() => {
        axios.get(`/machine`)
            .then(res => {
                const service = Math.floor((new Date(res.data[0].service) - new Date()) / (24 * 60 * 60 * 1000));
                const warranty = Math.floor((new Date(res.data[0].warranty) - new Date()) / (24 * 60 * 60 * 1000));
                const working = Math.abs(Math.floor((new Date() - new Date(res.data[0].working)) / (24 * 60 * 60 * 1000)));
                setMachine([
                    ["energy", res.data[0].energy + '%', res.data[0].energy],
                    ["service", res.data[0].service, service * 100 / 365],
                    ["warranty", res.data[0].warranty, warranty * 100 / 1095],
                    ["working", working + " days", '100']
                ]);
                const date = new Date(res.data[0].service);
            });
    }, []);
    return (
        <div className="machine grid__col grid__col--sm-12 grid__col--md-6 grid__col--lg-3" ref={props.forwardRef()}>
            <h4>Machine</h4>
            <div className="machine__wrapper">
                <div className="machine__slider" style={{ transform: `translateX(${100 * slide * (-1)}%)` }}>
                    {machine.map((item, index) => (
                        <div className="machine__slide" key={index}>
                            <span className={`machine__icon machine__icon--yellow icon-${item[0]}`}></span>
                            <div className="machine__title">{item[0]}</div>
                            <svg width="100%" height="100%" viewBox="0 0 42 42">
                                <circle cx="21" cy="21" r="15.91549430918954" fill="#F7F9FE" stroke="#F7F9FE" strokeWidth="1.2"></circle>
                                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3546AB" strokeLinecap="round" strokeWidth="1.2" strokeDasharray={`${item[2]} ${100 - item[2]}`} strokeDashoffset="25"></circle>
                                <text x="50%" fill="#3546AB" y="50%" dominantBaseline="middle" textAnchor="middle">{item[1]}</text>
                            </svg>
                        </div>
                    ))}
                </div>
                <div className="machine__nav">
                    <div className="machine__arrow" onClick={() => changeSlide('DECREMENT')}>
                        <span className="icon-arrow-left"></span>
                    </div>
                    <div className="machine__arrow" onClick={() => changeSlide('INCREMENT')}>
                        <span className="icon-arrow-right"></span>
                    </div>
                </div>
            </div>
            <div className="machine__indicators">
                {machine.map((item, index) => (<div key={index} className={`machine__indicator ${slide === index ? 'machine__indicator--active' : ''}`}></div>))}
            </div>
        </div>
    );
}
