import React from "react";
import "./leafcard.css";

const LeafCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectLeaf(props.type)} className={props.currentscore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit" } >
                <img alt={ props.type } src={ props.image } />
            </a>
        </div>
    </div>
);

export default LeafCard;