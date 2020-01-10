import React, { Component } from "react";
import TableRow from "./TableRow.js";
import "./TableRow.css";
import TableCell from "./TableCell.js";

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

  addARow = () => {
    let newRow = new Array(this.state.numOfCols).fill("gray");
    this.setState(
      {
        table: [...this.state.table, newRow]
      },
      () => console.log(this.state.table)
    );
  };

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

  renderTableContents = () => {
    if (this.state.table.length > 0) {
      return this.state.table.map(row => <TableRow row={row} />);
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div className="ButtonContainer">
              <button onChange={this.props.addRow}>Add Row</button>
              <button onChange={this.addCol}>Add Column</button>
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