import React from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


function SearchBar() {
    const {fetchRecipes} = useContext(UserContext)
    const [searchValue, setSearchValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetchRecipes(searchValue)
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
        <input type="text" placeholder="search for recipes in the ..." value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} />
        <div>
        <button>Search</button>
        </div>
        </div>
    </form>
    </>
  );
}

export default SearchBar;
