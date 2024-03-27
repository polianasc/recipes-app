import React from "react";
import SearchRecipeItem from './SearchRecipeItem'
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

function SearchRecipeList() {
    const {recipes} = useContext(UserContext)

    
  return (
    <>
    <div>
        {recipes.map((recipe, index) => (
            <div>
                <SearchRecipeItem key={index} recipe={recipe} />
            </div>
        ))}
    </div>
    </>
  );
}

export default SearchRecipeList;
