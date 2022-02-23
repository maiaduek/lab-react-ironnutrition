import React from 'react';
import { Input } from 'antd';

const AddFoodForm = (props) => {
  const [newFood, setNewFood] = React.useState('')

  const addFood = () => {
    props.setFoodsArr(props.foodsArr.concat(newFood))
  }

  return (
    <div style={{width: '500px'}}>
    <h4>Add Food Entry</h4>
      <form>
        <label htmlFor="name">Name</label>
        <Input name="name" value={newFood} onChange={(e) => setNewFood(e.target.value)} />
        <label htmlFor="image">Image</label>
        <Input name="image" type="text" value={newFood} onChange={(e) => setNewFood(e.target.value)} />
        <label htmlFor="calories">Calories</label>
        <Input name="calories" type="text" value={newFood} />
        <label htmlFor="calories">Calories</label>
        <Input name="calories" type="text" value={newFood} onChange={(e) => setNewFood(e.target.value)} />
        <button onClick={addNewFood}>Create</button>
      </form>
    </div>
  )
}


export default AddFoodForm