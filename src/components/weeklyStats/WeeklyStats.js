import React, { useState, useEffect } from "react";
import "./WeeklyStats.scss";
import axios from "axios";

export default function WeeklyStats(props) {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get(`/statistics`).then(res => {
            setStats(res.data);
        });
    }, []);

    return (
        <div className="weeklyStats grid__col grid__col--sm-5" ref={props.forwardRef()}>
            <div className="weeklyStats__wrapper">
                <div className="weeklyStats__header">
                    <h4 className="weeklyStats__title">Weekly Stats</h4>
                    <div className="weeklyStats__info">
                        <span className="icon-arrow-up"></span>Progress
                </div>
                </div>
                <div className="weeklyStats__chart">
                    <svg width="100%" height="200" viewBox="0 0 100% 200" className="weeklyStats__lines">
                        <line x1="0" y1="1" x2="100%" y2="1" className="weeklyStats__line" />
                        <line x1="0" y1="50" x2="100%" y2="50" className="weeklyStats__line" />
                        <line x1="0" y1="100" x2="100%" y2="100" className="weeklyStats__line" />
                        <line x1="0" y1="150" x2="100%" y2="150" className="weeklyStats__line" />
                        <line x1="0" y1="199" x2="100%" y2="199" className="weeklyStats__line" />
                    </svg>
                    <div className="weeklyStats__columns">
                        {stats.map((item, index) => (
                            <div key={index} className="weeklyStats__column" style={{ left: 14.28 * index + 5 + '%', height: (12 - (28 - item.temperature)) * 100 / 12 + "%" }}>
                                <div className="weeklyStats__popup">Average <span>{item.temperature + "℃"}</span></div>
                                <div className="weeklyStats__day">{item.day.slice(0, 3)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
