import React, { Component } from 'react';
import TableCell from './TableCell';
import './TableRow.css';

class TableRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numOfCells: props.numOfCells,
            cells: []
        }
        this.populateArray();
    }

    populateArray = () => {
        for(let i=0; i < this.state.numOfCells; i++){
            this.state.cells[i] = <TableCell />;
        }
    }
    
    render() {
        // console.log(this.state.numOfCells);
        //console.log(this.state.cells);
        
        return <tr>{this.state.cells}</tr>
        
    }
}

export default TableRow;