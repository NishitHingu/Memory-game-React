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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis quam hic minima consequuntur sunt necessitatibus optio 
                    explicabo! Nesciunt qui debitis deserunt pariatur beatae dolores nobis voluptas. 
                    Voluptatum vero ipsum ad!
                </span>
            </div>
        </div>
    );
}
 
export default HowToPlay;