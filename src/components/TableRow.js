import React, { Component } from "react";
import TableCell from "./TableCell";
import "./TableRow.css";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

//Takes in 1 row list of TableRows and must render TableCells from them
  renderRowContent = () => {

  	// return this.state.table.map(row => <TableRow row={palooz} />);

  	let thisRow = [];
  	for(let i = 0; i < this.props.row.length; i++) {
  		console.log(this.props.row[i]);
  		thisRow.push(<TableCell mouseColor={this.props.mouseColor} color={this.props.row[i]}/>);
  	}
  	return thisRow;
  };

  render() {
    return <tr>{this.renderRowContent()}</tr>;
  }
}

export default TableRow;