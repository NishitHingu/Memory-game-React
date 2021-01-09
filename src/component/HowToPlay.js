import React from 'react';

const HowToPlay = (props) => {
    const handleClick = () => {
        const info = document.querySelector(".how-to-play-info-wrapper");
        info.style.display = info.style.display === "block" ? "none" : "block";
    }

    return (
        <div className="how-to-play">
            <div className="how-to-play-btn sketchy-thin" onClick={() => handleClick()}>
                ?
            </div>
            <div className="how-to-play-info-wrapper">
                <h3 className="how-to-play-heading">HOW TO PLAY :</h3>
                <span className="how-to-play-info">
                    This game puts your memory to test.You have multiple cards on your screen.
                    Each card has a photo on its back.Clicking the card will flip it and you will be 
                    able to see the image on the back.After every 2 card flips the flipped cards will 
                    disappear if they have the same image.If the images are different it will flip and
                    hide the image.
                    Your goal is to make all the cards disappear.
                </span>
            </div>
        </div>
    );
}
 
export default HowToPlay;