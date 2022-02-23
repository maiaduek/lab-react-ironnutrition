import React from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foodsArr, setFoodsArr] = React.useState(foods)

  return (
    <div className="App">
      <AddFoodForm foodsArr={foodsArr} setFoodsArr={setFoodsArr} />
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'}}>
      {
        foodsArr.map((food, i) => {
          return (
            <div style={{margin: '20px'}} key={i}>
              <FoodBox food={food} />
              {/* <p>{food.name}</p>
              <img src={food.image} width='100px'/> */}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
export default App;