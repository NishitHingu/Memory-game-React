/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { CardContext } from "../context/CardContext";
import Card from "./Card";
import axios from "axios";
import SelectMode from "./SelectMode";
import PlayAgain from "./PlayAgain";
import 'wired-elements';

let currentCard = [];
let imagesResult;
let previousCardId;
let SolvedCards=0;

// React function component

const Game = (props) => {
  const { card, setCard, upadteCardData } = useContext(CardContext);
  const [ gameOver, setGameOver ] = useState(false);
  const [ noOfCards, setNoOfCards ] = useState(4);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=drawing&orientation=squarish&client_id=emej8Vmgfe-Ej8nmqjOgGa_lkhCd4AEzZ6SycfL8Meg`
      )
      .then((response) => {
        imagesResult= response.data.results;
        upadteCardData(imagesResult,noOfCards);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfCards]);

	// Click eventhandler for each card
  const handleClick = (clickedCard) => {
		let newData = card;
		if (clickedCard.id !== previousCardId) {
			if (currentCard.length === 2) {
				newData = matchCard();
			} else if (SolvedCards === (2*noOfCards-2)) {
        currentCard.push(clickedCard);
        newData = matchCard();
        setCard(newData);
        setGameOver(true);
      }
			if (clickedCard.class !== "card complete") {
				clickedCard.class = clickedCard.class === "card" ? "card show" : "card";
			} else {
        return;
      }
			newData = updateState(newData, clickedCard);
			setCard(newData);
			currentCard.push(clickedCard);
			previousCardId = clickedCard.id;
		}
  };


  // Function to checked if the 2 clicked cards have the same image
  const matchCard = () => {
    if (currentCard[1].imgSrc === currentCard[0].imgSrc) {
			currentCard[1].class = "card complete";
			currentCard[0].class = "card complete";
      let newData = updateState(card, currentCard[0]);
      newData = updateState(newData, currentCard[1]);
      currentCard = [];
      SolvedCards += 2;
      return newData;
    } else {
      currentCard[0].class = "card";
      currentCard[1].class = "card";
      let newData = updateState(card, currentCard[0]);
      newData = updateState(newData, currentCard[1]);
      currentCard = [];
      return newData;
    }
  };

  // Changing the difficulty by setting the noOfCards state
  const changeMode = (newNoOfCards) => {
    setGameOver(false);
    setNoOfCards(newNoOfCards);
    SolvedCards = 0;
  }

  const restart = () => {
    setGameOver(false);
    upadteCardData(imagesResult,noOfCards);
    SolvedCards = 0;
  }

  const updateState = (newCard, clickedCard) => {
    const newData = newCard.map((element) => {
      return element.id === clickedCard.id ? clickedCard : element;
    });
    return newData;
  };


  return (
    <div className="game sketchy">
      <SelectMode 
        changeMode={changeMode} 
        restart={restart}
        />
      <div className="card-stack sketchy-thick">
        {card.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            cardInfo={element}
            onClick={() => handleClick(element)}
          />
        ))}
        <PlayAgain 
          gameOver={gameOver}
          onClick={restart}
          />
      </div>
    </div>
  );
};

export default Game;
