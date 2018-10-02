import React, { Component } from 'react';
import LeafCard from "./components/LeafCard";
import Wrapper from "./components/Wrapper";
import TopText from "./components/TopText";
import leafs from "./leafs.json";
import './App.css';


class App extends Component {

  state= {
    message: "click a leaf to start!",
    leafs,
    thechosenleafs = [],
    score: 0,
    highscore: 0
  };

  // this is the function to shuffle when clicked!
  shuffleLeafs = id => {
    let clickedLeafIDs = this.state.clickedLeafIDs;

    if(clickedLeafIDs.includes(id)) {
      this.setState({ clickedLeafIDs: [], score: 0, status: "Your leaf-bag has been emptied! Keep clicking to start anew!" });
      console.log("loss condition achieved");
      return;
    } else {
      clickedLeafIDs.push(id)

      if (clickedLeafIDs.length === 8) {
        this.setState({ score: 8 status: "You have gatehred all the leaves!  Your yard is clean! Keep clicking to help clear your neighbor's yard...", clickedLeafIDs: [] });
        console.log("win condition achieved");
        return;
      }

      this.setState({ leafs, clickedLeafIDs, score: clickedLeafIDs.length, status: " " });

      for(let i = leafs.length -1; i > 0; i--) {
        let z = Math.floor(Math.random() * (i + 1));
        [leafs[i], leafs[z] = leafs[z], leafs[i]];
        console.log("shuffle shuffle");
      }

    } // this curly is to ELSE above

  } // this curly finished the SHUFFLE LEAFS function




  
}

export default App;
