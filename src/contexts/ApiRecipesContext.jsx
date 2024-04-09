import React from "react";
import { useState, createContext } from "react";

export const ApiRecipesContext = createContext()

function ApiRecipesProvider({children}) {
    const [recipes, setRecipes] = useState([])

  const ID ='e17e7786'
  const KEY ='7599a31de58296b2b18cad3b4252cd4c'


  const fetchRecipes = async(searchValue) => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${ID}&app_key=${KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
    
  return (
  <ApiRecipesContext.Provider value={{recipes, setRecipes, fetchRecipes}}>
    {children}
 </ApiRecipesContext.Provider>);
}

export default ApiRecipesProvider;

// https://api.edamam.com/search?q=${searchValue}&app_id=e17e7786&app_key=7599a31de58296b2b18cad3b4252cd4c'