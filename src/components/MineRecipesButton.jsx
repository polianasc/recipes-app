import React, { useState, useEffect } from "react";
import SaveForm from "./SaveForm";
import MineRecipesDisplay from "./MineRecipesDisplay";

//RECIPE DIARY

function SaveButton() {

  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(false)
  const [savedRecipes, setSavedRecipes] = useState([])


  useEffect(() => {
    const recipesFromStorage = JSON.parse(localStorage.getItem("recipes")) ||[];
    setSavedRecipes(recipesFromStorage)
  }, []);
  

  const handleSave = (recipeData) => {
   
    localStorage.setItem("recipes", JSON.stringify([...savedRecipes, recipeData]))
    setShowForm(false)
    setSavedRecipes([...savedRecipes, recipeData])
  }



  return (
  <>
  <div className="save-buttons-container">
    <h2>your recipes are save here 🔒 </h2>
    <div className="button-save">
      <button className="gray-btn" onClick = {() => setShowList(true)}> My Colection </button>
      <button className="gray-btn" onClick = {() => setShowForm(true)}> Save New Recipe </button>
    </div>
    { showForm && <SaveForm onSave={handleSave} />}

    { showList &&  !showForm && (
      <>
      { savedRecipes.length === 0 ? (
        <p> No recipes added yet.</p>
        ) : (
        <MineRecipesDisplay savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>
      )}
  </>
    )}
     </div>
    </>
  );
}

export default SaveButton;
