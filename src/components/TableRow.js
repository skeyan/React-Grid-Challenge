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
    };

    addACell = () => {
        this.setState(
            {numOfCells: this.state.numOfCells + 1}
        )
        this.state.cells.push(<TableCell />);
    };
    
    render() {
        return( 
        	<tr>{this.state.cells}</tr>
        );
        
    }
}

export default TableRow;