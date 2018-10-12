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

    // <div className="card">
    //     <div className="img-container">
    //         <a onClick={ () => props.selectLeaf( props.type ) } className={ props.score === 0 ? "style_prevu_kit" : "style_prevu_kit" } >
    //             <img alt={ props.type } src={ props.image } />
    //         </a>
    //     </div>
    // </div>
