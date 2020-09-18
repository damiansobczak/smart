import React, { useEffect, useState } from "react";
import "./Reports.scss";
import axios from "axios";

export default function Reports(props) {
    const [tab, changeTab] = useState(0);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get(`/reports`)
            .then(res => {
                const data = res.data;
                const quarterly = { money: Math.floor(Number(data[data.length - 1].savedMoney)), energy: Math.floor(Number(data[data.length - 1].savedEnergy)) };
                const annualy = { money: Math.floor(data.reduce((acc, curr) => acc + Number(curr.savedMoney), 0)), energy: Math.floor(data.reduce((acc, curr) => acc + Number(curr.savedEnergy), 0)) };
                setReports({ quarterly, annualy });
            });
    }, []);

    return (
        <div className="reports grid__col grid__col--sm-12 grid__col--md-6 grid__col--lg-3" ref={props.forwardRef()}>
            <h4>Reports</h4>
            <div className="reports__tabs">
                <button className={`reports__tab ${tab === 0 ? 'reports__tab--active' : ''}`} onClick={() => changeTab(0)}>Quarterly</button>
                <button className={`reports__tab ${tab === 1 ? 'reports__tab--active' : ''}`} onClick={() => changeTab(1)}>Annualy</button>
            </div>
            <div className="reports__periods" style={{ transform: `translateX(calc(${100 * tab * (-1)}% - ${tab === 0 ? 0 : 32}px))` }}>
                <div className="reports__period">
                    <div className="reports__item">
                        <span className="reports__icon icon-energy"></span>
                        <div className="reports__text">Saved energy</div>
                        <div className="reports__value">{reports.quarterly?.energy}kWh</div>
                    </div>
                    <div className="reports__item">
                        <div className="reports__icon reports__icon--green icon-money"></div>
                        <div className="reports__text">Saved money</div>
                        <div className="reports__value">${reports.quarterly?.money}</div>
                    </div>
                </div>
                <div className="reports__period">
                    <div className="reports__item">
                        <div className="reports__icon icon-energy"></div>
                        <div className="reports__text">Saved energy</div>
                        <div className="reports__value">{reports.annualy?.energy}kWh</div>
                    </div>
                    <div className="reports__item">
                        <div className="reports__icon reports__icon--green icon-money"></div>
                        <div className="reports__text">Saved money</div>
                        <div className="reports__value">${reports.annualy?.money}</div>
                    </div>
                </div>
            </div>
        </div >
    );
}
