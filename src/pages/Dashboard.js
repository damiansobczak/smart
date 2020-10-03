import React, { useEffect, useRef } from "react";
import "./Dashboard.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Core from "../components/core/Core";
import Temperature from "../components/temperature/Temperature";
import Reports from "../components/reports/Reports";
import Download from "../components/download/Download";
import WeeklyStats from "../components/weeklyStats/WeeklyStats";
import WeeklyInfo from "../components/weeklyInfo/WeeklyInfo";
import Machine from "../components/machine/Machine";
import { TweenMax, Power2 } from "gsap";
import withAuth from "../hoc/withAuth";
import { withRouter } from "react-router-dom";

const Dashboard = ({ isAuth, history }) => {
    const _refTemperature = useRef(null);
    const _refReports = useRef(null);
    const _refDownload = useRef(null);
    const _refWeeklyStats = useRef(null);
    const _refWeeklyInfo = useRef(null);
    const _refMachine = useRef(null);
    const _refAnim = useRef(null);

    useEffect(() => {
        TweenMax.staggerFrom(
            [_refTemperature.current, _refReports.current, _refDownload.current, _refWeeklyStats.current, _refWeeklyInfo.current, _refMachine.current],
            1,
            { ease: Power2.easeInOut, delay: 1, y: '30px', opacity: 0 }, 0.05);
        TweenMax.to(_refAnim.current, { ease: Power2.easeInOut, duration: 1, left: '-100%' });
    }, []);

    useEffect(() => {
        if (typeof isAuth === 'boolean' && isAuth === false) {
            history.push('/login');
        }
    });

    return (
        <div className="dashboard">
            <div className="dashboard__anim" ref={_refAnim}></div>
            <Sidebar />
            <Core>
                <Temperature forwardRef={() => _refTemperature} />
                <Reports forwardRef={() => _refReports} />
                <Download forwardRef={() => _refDownload} />
                <WeeklyStats forwardRef={() => _refWeeklyStats} />
                <WeeklyInfo forwardRef={() => _refWeeklyInfo} />
                <Machine forwardRef={() => _refMachine} />
            </Core>
        </div>
    );
}

export default withRouter(withAuth(Dashboard));