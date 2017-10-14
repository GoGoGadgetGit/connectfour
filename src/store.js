import { createStore } from 'redux';

const initial = {
    current: 'red',
    board: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ],

};

function reducer(state, action) {
    if (action.type === 'PLACEDROP') {
        console.log('drop' + action.payload)
        const tile = state.current;
        const col = state.board[action.payload].concat(tile);

        const board = state.board.slice();
        board[action.payload] = col;

        return {
            current: state.current === 'red' ? 'black' : 'red',
            board: board
        };
    }

    return state;
}


export default createStore(reducer, initial);