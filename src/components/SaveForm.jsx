import React from "react";
import { useState } from "react";

function SaveForm() {

    const [saveRecipe, setSaveRecipe] = useState('');


  return (
    <>
    <form>
        <label htmlFor=""> Recipe title </label>
        <input type="text" name="title" id="title" required/>

        <label htmlFor="">Ingredients: </label>
        <textarea  name="ingredients "id="ingredients" cols="30" rows="5" required />

        <label htmlFor="">Instructions: </label>
        <textarea name="instructions" id="ingredients" cols="30" rows="10" required />

        <label htmlFor="">Cooking Time</label>
        <input type="number" name="cookingTime" id="cookingTime" />

        <label htmlFor=""> Category </label>
        <input type="text" />

        <button>save</button>

    </form>
    </>
  );
}

export default SaveForm;
