import React from 'react';
import { Input } from 'antd';
import leFoods from '../foods.json';


const SearchItem = (props) => {
  const [searchFood, setSearchFood] = React.useState('')

  const search = (input) => {
    setSearchFood(input);
    let newFoodsArr = leFoods.filter((foodItem) => {
      if (foodItem.name.includes(input)) {
        return foodItem
      }
    })
    props.setFoodsArr(newFoodsArr)
  }

  return (
    <div style={{width: '500px'}}>
      <h3>Search:</h3>
      <form>
        <Input value={searchFood} onChange={(e) => search(e.target.value)} />
      </form>
      
    </div>
  )
}



export default SearchItem;