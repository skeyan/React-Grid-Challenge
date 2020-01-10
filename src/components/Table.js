import React, { Component } from 'react';
// import TableCell from './TableCell.js';
import TableRow from './TableRow.js'
import './TableRow.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Default Values:
            numOfRows: 2,
            numOfCols: 2,
            rows: []
        }
        this.populateRows();
    }

    populateRows = () => {
        for(let i=0; i < this.state.numOfRows; i++){
            this.state.rows[i] = <TableRow numOfCells={this.state.numOfCols}/>;
        }
    }

    addARow = () => {
        this.setState({
            numOfRows: this.state.numOfRows + 1
        })    
        this.state.rows.push(<TableRow numOfCells={this.state.numOfCols}/>);
    }

    addACol = () => {
        this.setState({
            numOfCols: this.state.numOfCols + 1
        })    
        console.log(this.state.numOfRows, this.state.numOfCols);
        for(var i = 0; i < this.state.numOfRows.length; i++) {
            console.log(this.state.numOfRows[i]);
            this.state.numOfRows[i].numOfCells = this.state.numOfRows[i].numOfCells + 1;
        }
    }
    
    render() {
        console.log(this.state.numOfCols);
        //console.log(this.state.rows);
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>
            </div>    
        );   
    }
}

export default Table;