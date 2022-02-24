import React from 'react';
import { Card, Col, Button } from 'antd';
// import { configConsumerProps } from 'antd/lib/config-provider';

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} width='100px' alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={(e) => props.removeFood(props.food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;