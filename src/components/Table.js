import React, { Component } from "react";
// import TableCell from './TableCell.js';
import TableRow from "./TableRow.js";
import "./TableRow.css";
import TableCell from "./TableCell.js";
​
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Default Values:
      numOfRows: 2,
      numOfCols: 2,
      table: []
    };
  }
​
  addARow = () => {
    let newRow = new Array(this.state.numOfCols).fill("gray");
    this.setState(
      {
        table: [...this.state.table, newRow]
      },
      () => console.log(this.state.table)
    );
  };
​
  addACol = () => {
    let newTable = [...this.state.table];
    for (let i = 0; i < newTable.length; i++) {
      newTable[i].push("gray");
    }
    this.setState(
      {
        table: newTable
      },
      () => console.log(this.state.table)
    );
  };
​
  renderTableContents = () => {
    if (this.state.table.length > 0) {
      return this.state.table.map(row => <TableRow row={row} />);
    } else {
      return null;
    }
  };
​
  render() {
    return (
      <div>
        <table>
          <tbody>{this.renderTableContents()}</tbody>
        </table>
      </div>
    );
  }
}
​
export default Table;