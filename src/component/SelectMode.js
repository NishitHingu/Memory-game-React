import React, { useState,useEffect } from 'react';
import HowToPlay from './HowToPlay';

const SelectMode = (props) => {
    const [ modeValue, setModeValue ] = useState(4);

    const updateMode = (e) => {
        let value = parseInt(e.target.value);
        console.log(value);
        setModeValue(value);
        props.changeMode(value);
    }

    // Sizing the wrapper
    useEffect(() => {
        let r = document.querySelector(":root");
        let widthDivider = 4;
        let heightDivider = modeValue/2;
        if (modeValue === 9) {
            widthDivider = 6;
            heightDivider = 3;
        } 
        let width = (90/widthDivider);
        let height = (90/heightDivider);
        console.log(width + " " + height);
        r.style.setProperty('--wrapperHeight', `${height}%`);
        r.style.setProperty('--wrapperWidth', `${width}%`);

    },[modeValue]);

    return (
        <div className="option">
            <div className="modes">
                <span>Difficulty</span>
                <button className="easy-mode sketchy-thin" value={4} onClick={(e) => updateMode(e)}>
                    Easy
                </button>
                <button className="medium-mode sketchy-thin" value={6} onClick={(e) => updateMode(e)}>
                    Medium
                </button>
                <button className="hard-mode sketchy-thin" value={9} onClick={(e) => updateMode(e)}>
                    Hard
                </button>
            </div>
            <HowToPlay value={modeValue} />
            <button className="restart-game sketchy-thin" onClick={() => props.restart()}>
                Restart
            </button>
        </div>
    );
}
 
export default SelectMode;