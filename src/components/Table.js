import React, { Component } from 'react';
// import TableCell from './TableCell.js';
import TableRow from './TableRow.js';
import './TableRow.css';
import TableCell from './TableCell.js';


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
            numOfRows: this.state.numOfRows + 1,
            rows: [...this.state.rows, <TableRow numOfCells={this.state.numOfCols}/>]
        })    
        //this.state.rows.push(<TableRow numOfCells={this.state.numOfCols}/>);
    };

    addACol = () => {
        let temp = this.state.rows.map(el => {
            el = <TableRow numOfCells={this.state.numOfCols + 1}/>;
            return el
        })
        this.setState({
            numOfCols: this.state.numOfCols + 1,
            rows: [...temp]
        }, 
        /*() => {
            for(let i=0; i<this.state.numOfRows; i++){
                this.state.rows[i] = 
            }
        }*/)    

    };
    
    render() {
        console.log(this.state.numOfRows);
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