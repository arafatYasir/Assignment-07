import Header from './Components/Header/Header'
import './App.css'
import Banner from './Components/Banner/Banner'
import Recipes from './Components/Recipes/Recipes'
import { useState } from 'react'

function App() {
  // Want to cook
  const [cookingList, setCookingList] = useState([]);

  const addToCookingList = (recipe) => {
    const newCookingList = [...cookingList, recipe];
    setCookingList(newCookingList);
  }

  // Currently cooking
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const addTocurrentlyCookingList = (newCooking) => {
    // currently cooking list updating
    const newCurrentlyCookingList = [...currentlyCooking, newCooking];
    setCurrentlyCooking(newCurrentlyCookingList);

    // update want to cook
    const newCookingList = cookingList.filter(cook => cook.recipe_id !== newCooking.recipe_id);
    setCookingList(newCookingList);
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Banner></Banner>

      <h1 className='text-4xl font-semibold text-center mt-24'>Our Recipes</h1>
      <p className='mt-6 text-xl text-center mb-12'>Check out our recipes and try something new. Do not forget to share us about your <br /> feedback of the recipe. Hope you enjoy it!</p>

      <Recipes addToCookingList={addToCookingList} cookingList={cookingList} currentlyCooking={currentlyCooking} addTocurrentlyCookingList={addTocurrentlyCookingList}></Recipes>
    </div>
  )
}

export default App
