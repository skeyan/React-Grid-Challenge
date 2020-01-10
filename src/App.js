import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "gray"
    };
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>React Grid Challenge</h1>    
        </div>

        <Table/>

      </div>
    );
  }
}

export default App;
