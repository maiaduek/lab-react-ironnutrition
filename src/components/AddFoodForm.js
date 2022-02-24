import React from 'react';
import { Input } from 'antd';

const AddFoodForm = (props) => {
  // const [newFood, setNewFood] = React.useState('')
  const [createName, setCreateName] = React.useState('')
  const [createImage, setCreateImage] = React.useState('')
  const [createCalories, setCreateCalories] = React.useState('')
  const [createServings, setCreateServings] = React.useState('')

  const create = (e) => {
    e.preventDefault();
    let foodObj = {}
    foodObj['name'] = createName
    foodObj['image'] = createImage
    foodObj['calories'] = parseInt(createCalories)
    foodObj['servings'] = parseInt(createServings)
    props.setFoodsArr(props.foodsArr.concat(foodObj))
    props.setSearchFood(props.foodsArr.concat(foodObj))
    setCreateName('')
    setCreateImage('')
    setCreateCalories('')
    setCreateServings('')
  }

  return (
    <div style={{width: '500px'}}>
    <h3>Add Food Entry</h3>
      <form onSubmit={(e) => create(e)}>
        <label htmlFor="name">Name</label>
        <Input name="name" value={createName} onChange={(e) => setCreateName(e.target.value)} />
        <label htmlFor="image">Image</label>
        <Input name="image" type="text" value={createImage} onChange={(e) => setCreateImage(e.target.value)} />
        <label htmlFor="calories">Calories</label>
        <Input name="calories" type="text" value={createCalories} onChange={(e) => setCreateCalories(e.target.value)} />
        <label htmlFor="calories">Servings</label>
        <Input name="calories" type="text" value={createServings} onChange={(e) => setCreateServings(e.target.value)} />
        <button>Create</button>
      </form>
    </div>
  )
}


export default AddFoodForm