import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import 'bootstrap'
import Navbar from './components/Navbar'
import SearchButton from './components/SearchButton'
import MineRecipesButton from './components/MineRecipesButton'
import FavoritesButton from './components/FavoritesButton'




function App() {
  // const {recipes, fetchRecipes} = useContext(UserContext)
 
  //   async function getRecipes(value){
  //     const response = await fetch ((`https://api.edamam.com/search?q=${value}&app_id=${ID}&app_key=${KEY}`))
  //     const data = await response.json()
  //     console.log(data)
  //     setRecipes(data)

  //   }
  //   getRecipes()
  // }, []);
    

  return (
    <>
  <div className='container'>
   <h1 className='text-center my-4'>Recipe App</h1>
    <Routes>
      <Route path ="/" element={<Navbar/>}>
        {/* <Route index element={<Navbar />}/> */}
        <Route path="/search" element={<SearchButton/>} />
        <Route path="/mine-recipes" element={<MineRecipesButton/>} />
        <Route path="/favorites" element={<FavoritesButton/>} />
      </Route>
    </Routes>
  </div> 
    </>
  )
}

export default App




