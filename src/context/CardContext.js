/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect } from "react";

export const CardContext = createContext();

// Shuffling function to randomly arrange the cards data

const shuffle = (card) => {
  let len = card.length;
  while (len !== 0) {
    let randomIndex = Math.floor(Math.random() * len);
    len -= 1;

    let temp = card[randomIndex];
    card[randomIndex] = card[len];
    card[len] = temp;
  }
  console.log("called");
  return card;
};

const CardContextProvider = (props) => {
  const [ card, setCard ] = useState([]);

  function upadteCardData(data,noOfCards) {
    let cardData = [];
    data.forEach((image,i) => {
      if (i < noOfCards) {
        let newCard = { imgSrc: image.urls.thumb, class: "card", id: i };
        cardData = [...cardData,newCard];
        console.log(cardData);
      }
    });
    console.log(cardData);
    let newCardData = [];
    newCardData = cardData.map((card,i) => {
      let newCard = {...card};
      newCard.id = i+noOfCards;
      console.log(newCard.id + " and " + card.id);
      return newCard;
    });
    cardData = [...cardData, ...newCardData];
    cardData = shuffle(cardData);
    console.log(cardData);
    setCard(cardData);
  }

  
  return (
    <CardContext.Provider value={{ card, setCard, upadteCardData }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
