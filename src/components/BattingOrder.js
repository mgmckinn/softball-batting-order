/** @format */

import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./BattingOrder.css";

const BattingOrder = ({ names }) => {
  const [battingOrder, setBattingOrder] = useState([]);

  const generateBattingOrder = () => {
    const shuffledNames = names.sort(() => 0.5 - Math.random());
    setBattingOrder(shuffledNames);
  };

  return (
    <div className='batting-order-container'>
      <h1 className='purple-text'>Batting Order Generatorator</h1>
      <Button onClick={generateBattingOrder} variant='primary'>
        Generate Batting Order
      </Button>
      <ListGroup className='batting-order-list'>
        {battingOrder.map((name, index) => (
          <ListGroup.Item key={index} className='white-text'>
            {index + 1}. {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className='print-button' variant='secondary'>
        Print Batting Order
      </Button>
    </div>
  );
};

export default BattingOrder;
