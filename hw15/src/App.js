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
    score: 0,
    highscore: 0
  }

  componentDidMount() {
  }

  shufflecards = array => {
    for (let i = array.length -1; i > 0; i--) {
      let z = Math.floor(Math.random() * (i + 1));
      [array[i], array[z]] = [array[z], array[i]]
    }
  }



  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }

}

export default App;
