import React from "react";
import "./Core.scss";
import Grid from "../grid/Grid";

export default function Core(props) {
    return (
        <div className="core">
            <h1 className="core__title">Dashboard</h1>
            <div className="core__wrapper">
                <Grid>{props.children}</Grid>
            </div>
        </div>
    );
}
