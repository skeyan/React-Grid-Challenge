import React, { Component } from "react";
import TableRow from "./TableRow.js";
import "./TableRow.css";
import TableCell from "./TableCell.js";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Default Values:
      numOfRows: 1,
      numOfCols: 1,
      table: []
    };
  }

  addRow = () => {
    let newRow = new Array(this.state.numOfCols).fill("gray");
    this.setState(
      {
        table: [...this.state.table, newRow],
        numOfRows: this.state.numOfRows + 1
      }
      // ,
      // () => console.log("added row", this.state.numOfRows, this.state.table)
    );
  };

  addCol = () => {
    if(this.state.numOfRows > 1) {
        let newTable = [...this.state.table];
        for (let i = 0; i < newTable.length; i++) {
          newTable[i].push("gray");
        }
        this.setState(
          {
            table: newTable,
            numOfCols: this.state.numOfCols + 1
          }
        );  
    }
    
  };

  renderTableContents = () => {
    if (this.state.table.length > 0) {
      return this.state.table.map(row => <TableRow row={row} />);
    } else {
      return null;
    }
  };

  render() {
    //console.log(this.state.table);
    return (
      <div>
        <div className="ButtonContainer">
              <button onClick={this.addRow}>Add Row</button>
              <button onClick={this.addCol}>Add Column</button>
              <select>
                <option value="gray">Gray</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
              </select>
        </div>
        <table>
          <tbody>{this.renderTableContents()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;