import React, { useState, useEffect } from "react";
import "./WeeklyInfo.scss";
import axios from "axios";

export default function WeeklyInfo(props) {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get(`/statistics`).then(res => {
            setStats({
                energy: Math.floor(res.data.reduce((acc, curr) => acc + Number(curr.energy), 0) / res.data.length),
                humidity: Math.floor(res.data.reduce((acc, curr) => acc + Number(curr.humidity.match(/\d+/g)), 0) / res.data.length)
            });
        });
    }, []);

    return (
        <div className="weeklyInfo grid__col grid__col--sm-12 grid__col--md-6 grid__col--lg-3" ref={props.forwardRef()}>
            <h4>Info</h4>
            <div className="weeklyInfo__item">
                <span className="weeklyInfo__icon icon-energy"></span>
                <div className="weeklyInfo__content">
                    Energy Consumed <span>{stats.energy + `kWh`}</span>
                </div>
            </div>
            <div className="weeklyInfo__item">
                <span className="weeklyInfo__icon weeklyInfo__icon--orange icon-droplet"></span>
                <div className="weeklyInfo__content">
                    Average Humidity <span>{stats.humidity + `%`}</span>
                </div>
            </div>
            <div className="weeklyInfo__summary">
                Weekly Average Temperature <span>22&#176;C</span>
            </div>
        </div>
    );
}
