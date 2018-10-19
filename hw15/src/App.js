import React, { Component } from 'react';
import LeafCard from "./components/LeafCard";
import Wrapper from "./components/Wrapper";
import TopText from "./components/TopText";
import Score from "./components/Score";
import leafs from "./leafs.json";
import './App.css';


class App extends Component {

  state = {
    status: "click a leaf to start!",
    leafs: leafs,
    score: 0,
    clickedLeafIDs: []
  };

  // this is the function to shuffle when clicked!
  shuffleLeafs = id => {
    console.log("this is the ID of the thing you clicked on: " + id);
    console.log("this is the array before you click: " + this.state.clickedLeafIDs);
    this.setState({
      clickedLeafIDs: [...this.state.clickedLeafIDs, id],
      score: this.state.score + 1,
      status: "the trees are nervous, but accept you so far..."
    });
    console.log("this is the array after click: " + this.state.clickedLeafIDs); // NOTE: it doesn't get here correctly!
    console.log("this is the score after you click: " + this.state.score);
    console.log("---------------");

    for(let i = leafs.length -1; i > 0; i--) {
      let z = Math.floor(Math.random() * (i + 1));
      [leafs[i], leafs[z]] = [leafs[z], leafs[i]];
      console.log("shuffle shuffle");
    }

    if (this.state.clickedLeafIDs.includes(id)) {
      console.log("you already clicked on this!");
      this.setState({
        status: "Your leaf-bag has been emptied! Keep clicking to start anew!",
        score: 0,
        clickedLeafIDs: [],        
      });
    } else if (this.state.clickedLeafIDs.length === 7) {
      console.log("win condition achieved!")
      this.setState({
        
      });
    }

//         this.setState({ score: 8, status: "You have gathered all the leaves!  Your yard is clean! Keep clicking to help clear your neighbor's yard...", clickedLeafIDs: [] });
//         console.log("win condition achieved");
//         return;
//       }



  } // this curly finished the SHUFFLE LEAFS function


//     if(this.state.clickedLeafIDs.includes(id)) {
//       this.setState({ clickedLeafIDs: [] });          // note: WHY DO SCORE AND STATUS NEVER LOG 
//       this.setState({ score: 0 });
//       this.setState({ status: "Your leaf-bag has been emptied! Keep clicking to start anew!" });
//       console.log("loss condition achieved");
//         return;
//     } else {

//       let a = this.state.clickedLeafIDs.slice(); //creates the clone of the state
//       a[this.state.clickedLeafIDs.length - 1] = id;
//       this.setState({clickedLeafIDs: a});
//       // NOTE: if I X this part out, the array gets super-wonky.  why???  what does the clone help

//       if (this.state.clickedLeafIDs.length === 8) {          // note: WHY DO SCORE AND STATUS NEVER LOG
//         this.setState({ score: 8, status: "You have gathered all the leaves!  Your yard is clean! Keep clicking to help clear your neighbor's yard...", clickedLeafIDs: [] });
//         console.log("win condition achieved");
//         return;
//       }

// //      this.setState({ score: " " });
      
//       for(let i = leafs.length -1; i > 0; i--) {
//         let z = Math.floor(Math.random() * (i + 1));
//         [leafs[i], leafs[z]] = [leafs[z], leafs[i]];
//         console.log("shuffle shuffle");
//       }

//       this.setState({ leafs: leafs });

//     } // this curly is to ELSE above


// Render Unto Class Component That Which Is Class Component's
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <TopText />
        </header>

        <Score score={ this.state.score } status={ this.state.status } />

        <Wrapper> 
          {leafs.map(leaf => (
          <LeafCard shuffleLeafs={ this.shuffleLeafs } id={ leaf.id } key={ leaf.id } image= { leaf.image } />
          ))} 
        </Wrapper>

      </div>
    );
  } // this curly is to RENDER

  
} // this curly is to CLASS APP EXTENDS COMPONENT

export default App;
