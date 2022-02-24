import React from 'react';
import { Input } from 'antd';


const SearchItem = (props) => {
  const [searchFood, setSearchFood] = React.useState('')

  const search = (input) => {
    setSearchFood(input);
    let newFoodsArr = props.foodsArr.filter((foodItem) => {
      if (foodItem.name.toLowerCase().includes(input.toLowerCase())) {
        return foodItem
      }
    })
    props.setSearchFood(newFoodsArr)
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