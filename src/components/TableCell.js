import React, { Component } from 'react';
import './TableCell.css';

class TableCell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "",
            hasColor: false
        }
    }

    render() {
        return (<td></td>)
    }
}

export default TableCell;