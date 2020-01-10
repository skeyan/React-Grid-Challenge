import React, { Component } from 'react';
import './TableCell.css';

class TableCell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
            hasColor: false
        }
    }

    setColor = () => {
        this.setState({
            //color: "pink",
            color: this.props.mouseColor,
            hasColor: true
        });
    }

    render() {
        console.log(this.props.color);
        return (<td onClick={this.setColor} id={this.state.color}></td>)
    }
}

export default TableCell;