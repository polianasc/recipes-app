import React, { useState } from "react";

function MineRecipesDisplay({savedRecipes, setSavedRecipes}) {
  const [showInstructions, setShowInstructions] = useState({})

  function handleRemove(id) {
    const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes))
    setSavedRecipes(updatedRecipes)
  }


  function toggleInstructions(recipeId){
    setShowInstructions(prevState => ({
      ...prevState,
      [recipeId]: !prevState[recipeId]
    }))
  }

  return(
  <>
  <div className="container-list">

  {savedRecipes.map((recipe, index) => (
    <div  className="list-item" key={index}>
      <div className="delete-btn"> 
        <button className="delete-btn" onClick={() => handleRemove(recipe.id)}>x</button>
      </div>
      <h3>{recipe.title}</h3>

      <div className="labels-container">
        <div className="label-item"> ⏱ {recipe.cookingTime} min</div>
        <div className="label-item"> 🔥 {recipe.calories} kcal</div>
        <div className="label-item"> protein: {recipe.protein}gr</div>
      </div>

      <h4>Ingredients:</h4>
      <div className="ingredients-item">
      {recipe.ingredients.split(/\d+\s/).map((ingredient, index) => ( <div key={index}> {ingredient.trim()}
      </div>
      ))}

      </div>

      <button className="green-btn" onClick={()=> toggleInstructions(recipe.id)}>
        {showInstructions[recipe.id] ? "hide" : "how to make"}  </button>

        {showInstructions[recipe.id] && ( 
        <div className="ingredients-item"> {recipe.instructions}</div>
       )}
      
      {/* <img src={recipe.image} alt="" /> */}
    
      {/* <button className="green-btn" onClick={() => handleRemove(recipe.id)}>x</button> */}
    </div>
  ))}
  </div>
 
  </>
  );
}

export default MineRecipesDisplay;
