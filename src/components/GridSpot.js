import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dropChecker } from '../actions';

class GridSpot extends Component {
    handleClick() {
        console.log(`Clicked on column ${this.props.x}`)

        this.props.sendTileDrop(this.props.x);
    }
// x is column and y is row
    render() {
        const board = this.props.board;
        const x = this.props.x;
        const y = this.props.y;

        let classes = 'cell';

        if (board[x][y] !== undefined) {
            if (board[x][y] === 'red') {
                classes += ' p2';
            } else {
                classes += ' p1';
            }
        }
        return (
            <div className={classes} onClick={() => this.handleClick()}>
                <p>{this.props.x}, {this.props.y}</p>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        board: state.board
    };
};

const dispatchToProps = dispatch => {
    return {
        sendTileDrop: col=> dispatch(dropChecker(col)),
    };
}

export default connect(stateToProps, dispatchToProps)(GridSpot);