import React from "react";
import "./score.css";

const Score = props => (
    <div>
        <h2>Score: { props.score } </h2>
        <h4>{props.status}</h4>
    </div>
);

export default Score;