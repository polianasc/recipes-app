import React, { useState } from "react";


function SearchRecipeItem({recipe}) {
  const openRecipePage =(url) => {
    window.open(url, "_blank")
  }

  return (
    <>
 <div className="container-list">
    <div className="list-item">
        <div>
         <img className="img-search"src={recipe.recipe.image} alt="" />      
        </div>
        <div className="list-item-container">
        <h3>{recipe.recipe.label}</h3>
        <div className="container-labels">
        <div className="label-item"> ⏱ {recipe.recipe.totalTime}min </div>
          <div className="label-item"> 🔥 {Math.floor(recipe.recipe.calories)} kcal</div>
          <div className="label-item"> protein: {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)}g</div>
        </div>
       
            <h4>Ingredients:</h4>
             <div className="ingredients-item">
              {recipe.recipe.ingredientLines.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
              )) }
               </div>
            <button className="green-btn" onClick={() => openRecipePage(recipe.recipe.url)}> how to make </button>
   
         
          </div>
       
      
      </div>
      </div>
    </>
  );
}

export default SearchRecipeItem;
