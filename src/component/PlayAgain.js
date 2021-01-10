import React from 'react';

const PlayAgain = (props) => {
    if (props.gameOver) {
        return (
            <div className="game-over-div">
                <button className="game-over sketchy-thin" onClick={props.onClick}>
                    Play Again
                </button>
            </div>
        )
    } else {
        return null;
    }
}
 
export default PlayAgain;
