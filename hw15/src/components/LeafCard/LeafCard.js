import React from "react";
import "./leafcard.css";

const LeafCard = props => (
    <div className="card img-container">
        <a onClick={() => props.shuffleLeafs(props.id) } className="shuffleLeafCards">
            <img alt={ props.type } src={ props.image } id={ props.id } />
        </a>
    </div>
);

export default LeafCard;