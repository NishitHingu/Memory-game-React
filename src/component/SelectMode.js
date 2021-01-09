import React, { useState,useEffect } from 'react';
import HowToPlay from './HowToPlay';

const SelectMode = (props) => {
    const [ modeValue, setModeValue ] = useState(4);
    let hardValue = 9;

    if (window.innerWidth <= 450) {
        hardValue = 8;
    }   

    const updateMode = (e) => {
        let value = parseInt(e.target.value);
        console.log(value);
        setModeValue(value);
        props.changeMode(value);
    }

    // Sizing the wrapper
    useEffect(() => {
        let r = document.querySelector(":root");
        let totalWidth = window.innerWidth;
        let width,height;
        let padX = 0;
        let padY = 15;
        if (totalWidth <= 450) {
            let widthDivider = 4;
            let heightDivider = modeValue/2;
            switch (modeValue) {
                case 4:
                    width = (85/widthDivider);
                    height = (70/heightDivider);
                    break;
                case 6:
                    width = (80/widthDivider);
                    height = (90/heightDivider);
                    padY = 5;
                    break;
                case 8:
                    width = (80/widthDivider);
                    height = (90/4);
                    padY = 5;
                    break;
                default:
                    width = (90/widthDivider);
                    height = (90/heightDivider);
                    break;
            }
        } else {
            let widthDivider = 4;
            let heightDivider = modeValue/2;
            if (modeValue === 9) {
                widthDivider = 6;
                heightDivider = 3;
            } 
            width = (90/widthDivider);
            height = (90/heightDivider);
        }
        console.log(width + " " + height);
        r.style.setProperty('--wrapperHeight', `${height}%`);
        r.style.setProperty('--wrapperWidth', `${width}%`);
        r.style.setProperty('--cardStackPadding', `${padY}% ${padX}%`);
        updateClass(modeValue);
    },[modeValue]);

    function updateClass(modeValue) {
        let div = document.querySelector(".modes");
        let buttons = div.querySelectorAll("button");

        // Adding thick active-mode class if the mode is selected
        buttons.forEach(button => {
            if (parseInt(button.value) === modeValue) {
                button.classList.add("active-mode");
                console.log(button);
            } else {
            button.classList.remove("active-mode");
            }
        })
    }

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
                <button className="hard-mode sketchy-thin" value={hardValue} onClick={(e) => updateMode(e)}>
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