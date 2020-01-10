import React, { Component } from "react";
import TableCell from "./TableCell";
import "./TableRow.css";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

//Takes in 1 row list of TableRows and must render TableCells from them
  renderRowContent = () => {
  	console.log(this.props.row.length);
  	let thisRow = [];
  	for(let i = 0; i < this.props.row.length; i++) {
  		thisRow.push(<TableCell />);
  	}
  	return thisRow;
  };

  render() {
    return <tr>{this.renderRowContent()}</tr>;
  }
}

export default TableRow;