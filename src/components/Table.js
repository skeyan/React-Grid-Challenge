import React, { Component } from 'react';
// import TableCell from './TableCell.js';
import TableRow from './TableRow.js'
import './TableRow.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: 0,
        }
    }

    
    render() {
        return <table>
            <tbody>
                <TableRow numOfCells={10}/>
            </tbody>
        </table>        
    }
}

export default Table;