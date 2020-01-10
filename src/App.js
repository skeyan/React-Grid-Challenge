import React, { Component } from 'react';
import './App.css';
// import TableRow from './components/TableRow.js';
import Table from './components/Table.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  

  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>React Grid Challenge</h1>    
        </div>

        <div className="ButtonContainer">
          <button>Add Row</button>
          <button>Add Column</button>
          <select>
            <option value="gray">Gray</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
        </div>

        <div className="TableContainer">
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
