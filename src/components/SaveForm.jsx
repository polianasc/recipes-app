import React from "react";
import { useState } from "react";

function SaveForm({onSave}) {

    const [inputs, setInputs] = useState({
        title:"",
        ingredients:"",
        instructions:"",
        cookingTime:"",
        calories:"",
        protein:"",
        // image:"",
    });

    function handleChange(e) {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }


    function handleSubmit(e){
        e.preventDefault();
        const data = {
            title: inputs.title,
            ingredients: inputs.ingredients,
            instructions: inputs.instructions,
            cookingTime: inputs.cookingTime,
            // image: inputs.image,
            calories: inputs.calories,
            protein: inputs.protein,
            id: Date.now(), //usar ID here
        } 
        onSave(data);
        setInputs({
            title:"",
            ingredients:"",
            instructions:"",
            cookingTime:"",
            calories:"",
            protein:"",
            // image:"",
        })
    }


  return (
    <>
    <form className="form-mine-recipes" onSubmit={handleSubmit}>
        <label htmlFor=""> Recipe title </label>
        <input type="text" name="title" id="title" value={inputs.title} onChange={handleChange}/>

        <label htmlFor="">Ingredients: </label>
        <textarea  name="ingredients" id="ingredients" cols="30" rows="5" value={inputs.ingredients} onChange={handleChange}/>

        <label htmlFor="">Instructions: </label>
        <textarea name="instructions" id="instrutions" cols="30" rows="10"  value={inputs.instructions} onChange={handleChange}/>


        <div className="container-labels">
            <label htmlFor="">Time (minutes): </label>
            <input type="number" name="cookingTime" id="cookingTime" value={inputs.cookingTime}onChange={handleChange} />

            <label htmlFor="">Calories (kcal):</label>
            <input type="number" name="calories" id="calories" value={inputs.calories} onChange={handleChange} />

            <label htmlFor="">Protein (grams):</label>
            <input type="number" name="protein" id="protein" value={inputs.protein} onChange={handleChange} />
        </div>
        {/* <label htmlFor=""> Image </label>
        <input type="file" name="image" id="image" value={inputs.image} onChange={handleChange}/> */}
    
        <button className="green-btn">save</button>

    </form>
    </>
  );
}

export default SaveForm;
