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
    
    render() {
        console.log(this.state.numOfRows);
        console.log(this.state.rows);
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