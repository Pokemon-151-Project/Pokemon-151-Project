import React, { useState } from "react";

//importing components
import Header from "./components/Header";
import AllPokemon from "./components/AllPokemon";
import SmolBeans from "./components/SmolBeans";

import data from "./data";
import { useEffect } from "react/cjs/react.development";

function App() {
  //sets the pokemon data to state. It starts as the original data but my hope is that I can update it based on filters.
  const [pokemon, setPokemon] = useState(data);

  const setSmall = async () => {
    const newData = pokemon
      .filter((item) => {
        const weightInt = item.weight.split(" ")[0];
        // console.log(weightInt);
        // console.log(item.weight);
        return weightInt < 5;
      })
      // .then(setPokemon(newData));
      .then(console.log(newData));
  };

  setSmall();
  // useEffect(() => {
  //   setSmall();
  // }, []);

  return (
    <div className="App">
      <Header />
      <AllPokemon pokemon={pokemon} />
      {/* <SmolBeans pokemon={pokemon} /> */}
    </div>
  );
}

export default App;

//So, my hope here for display options is to do something like this:
//Make <AllPokemon/> a catch-all component
//It'll display whatever pokes I want to sort by, passed in through props from App
//What pokes it takes in as props is set by the user clicking buttons in Header
//Maybe even have just a few catch-all functions to set state, rather than say, one for each type. Like the "type" catch-all function would take in a type and set the pokemon data to only pokemon of that type.
