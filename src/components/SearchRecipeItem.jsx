import React from "react";


function SearchRecipeItem({recipe, index}) {

  return (
    <>
    <div>
        <div>
        <h3>{recipe.recipe.label}</h3>
        <img src={recipe.recipe.image} alt="" />
        {/* <p>{recipe.recipe.ingredients}</p> */}
        
            {/* {ingredients.map((ingredients, index) => (
                <li key={index}>{ingredient.text}</li>
            ))} */}
        </div>
        <div>
          <a href={recipe.recipe.shareAs}>nutrition</a>
        </div>
        <div>
          <a href={recipe.recipe.url}>recipe</a>
        </div>
        <div> mark as favorite
         <input type="checkbox" name="favorite" id="favorite" placeholder="favorite" />
        </div>
        {/* <a href={recipe.recipe.url}>add as a favorite</a> */}
    </div>
    </>
  );
}

export default SearchRecipeItem;
