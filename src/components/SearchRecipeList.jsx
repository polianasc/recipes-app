import React from "react";
import SearchRecipeItem from './SearchRecipeItem'
import { ApiRecipesContext } from "../contexts/ApiRecipesContext";
import { useContext } from "react";

// FLAVOR PROFILE

function SearchRecipeList() {
    const {recipes} = useContext(ApiRecipesContext)

  return (
    <>
    <div className="container-list">
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
