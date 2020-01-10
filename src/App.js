import React from 'react';
import './App.css';
// import TableRow from './components/TableRow.js';
import Table from './components/Table.js'

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <h1>React Grid Challenge</h1>    
      </div>
      <div className="TableContainer">
        <Table/>
      </div>
    </div>
  );
}

export default App;
