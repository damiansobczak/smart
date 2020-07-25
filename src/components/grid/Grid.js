import React, { Children } from "react";
import "./Grid.scss";

export default function Grid(props) {
    return (
        <div className="grid">
            {props.children}
        </div>
    );
}
