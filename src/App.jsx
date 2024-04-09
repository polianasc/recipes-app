import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchButton from './components/SearchButton'
import MineRecipesButton from './components/MineRecipesButton'
import Home from './components/Home'




function App() {
  const [isStarted, setIsStarted] = useState(false)
  const navigate = useNavigate();

  const handleStartClick = () => {
    setIsStarted(true)
    navigate("/")
  }

 
  return (
    <div className='App'>
    {!isStarted && ( 
       <div className='container'>
        {/* <h1>Pantry Match</h1> */}
        <h1 className='text-logo'> 💚 Flavor Match 💚</h1>

        <div> When that ingredient in your pantry catches your eye, and you're like: 
        </div>
        <div className='phrase'>  Well, hello there, what's cooking? 😏 </div>
       
        <h3>That's when Flavor Match swoops in to play cupid!💘 </h3>
        
        <div>If your heart rate increases and you're not sure what to do, head to Flavor Profiles for a recipe match.😅 </div>
        
        <div>But if you've got it all figured out, save that irresistible recipe you whipped up for another date in Recipe Diary 😉 </div>
        {/* <p>Here you can match a Flavor Profile with some ingredient you have in your fridge or pantry</p>
        <p>or you can save to remmenber that delicius dish you make (for yourself)</p> */}
        <button className="start-btn" onClick={handleStartClick}> Are you ready to play cupid with your ingredients? </button>
      </div>
    )}

    {isStarted && (
      // <div className='container'>
        <Routes>
          <Route path ="/" element={<Navbar />}>
            <Route path="/home" element={<Home/>} />
            <Route path="/flavor-profile" element={<SearchButton/>} />
            <Route path="/recipe-diary" element={<MineRecipesButton/>} />
          </Route>
        </Routes> 
      // </div> 
    )}

    </div>
  )
}

export default App




