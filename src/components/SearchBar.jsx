import React from "react";
import { useState } from "react";
import { ApiRecipesContext } from "../contexts/ApiRecipesContext";
import { useContext } from "react";


function SearchBar() {
    const {fetchRecipes} = useContext(ApiRecipesContext)
    const [searchValue, setSearchValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetchRecipes(searchValue)
    }

     function handleChange(e){
      setSearchValue(e.target.value)
     }


  return (
    <>
    <div className="search-bar-container">
    <h2>... searching for a match? 😏</h2>
    <form className="search-bar" onSubmit={handleSubmit}>
    
        <input type="text" placeholder="type the ingredient..." value={searchValue} 
        onChange={handleChange} />
        <div>
        <button className="green-btn">🔍</button>
        </div>
    </form>
    </div>
    </>
  );
}

export default SearchBar;
