/* eslint-disable no-unused-vars */
import React from "react";
import Game from "./component/Game";
import Header from "./component/Header";
import CardContextProvider, { CardContext } from "./context/CardContext";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContextProvider>
        <Game />
      </CardContextProvider>
    </div>
  );
}

export default App;
