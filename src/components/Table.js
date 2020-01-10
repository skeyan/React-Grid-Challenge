import React, { Component } from 'react';
// import TableCell from './TableCell.js';
import TableRow from './TableRow.js'
import './TableRow.css';
import App from '../App.js';

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

    addRow = () => {
        this.setState({
            numOfRows: this.state.numOfRows + 1
        })    
        this.state.rows[this.state.numOfRows-1] = <TableRow/>
    };

    addCol = () => {

    };

    populateRows = () => {
        for(let i=0; i < this.state.numOfRows; i++){
            this.state.rows[i] = <TableRow numOfCells={this.state.numOfCols}/>;
        }
    }
    
    render() {
        console.log(this.state.rows);
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table> 
                <App someprop={this.addRow}/>
            </div>    
        );   
    }
}

export default Table;