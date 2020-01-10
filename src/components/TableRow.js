import React, { Component } from "react";
import TableCell from "./TableCell";
import "./TableRow.css";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <tr>TableRow-Here</tr>;
  }
}

export default TableRow;