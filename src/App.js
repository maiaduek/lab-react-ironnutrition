import React from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchItem from './components/SearchItem'

function App() {
  const [foodsArr, setFoodsArr] = React.useState(foods)
  const [showForm, setShowForm] = React.useState(false)

  const removeFood = (foodToRemove) => {
    let filtered = foodsArr.filter(food => {
      return food.name !== foodToRemove;
    })
    setFoodsArr(filtered)
  }

  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide' : 'Show'}</button>

        {showForm && <AddFoodForm foodsArr={foodsArr} setFoodsArr={setFoodsArr} /> }
      <SearchItem setFoodsArr={setFoodsArr} />
      {!foodsArr.length ? <h1>NO FOOD MATCH</h1> : ''}
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'}}>
      {
        foodsArr.map((food, i) => {
          return (
            <div style={{margin: '20px'}} key={i}>
              <FoodBox food={food} removeFood={removeFood}/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default App;