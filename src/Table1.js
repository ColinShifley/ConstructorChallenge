import React, { useState } from 'react';

const Table1 = props => {
  const [big, setBig] = useState(props);

  const enterOrder = () => {
    const orders = [
      {
        protein: 'beef',
        drink: 'Coke',
        side: 'broccoli',
      },
      {
        protein: 'chicken',
        drink: 'Sprite',
        side: 'carrots',
      },
      {
        protein: 'fish',
        drink: 'Pepsi',
        side: 'asparagus',
      },
    ];
    setBig(orders[Math.floor(Math.random() * orders.length)]);
  };

  return (
    <div>
      <h2>
        protein={big.protein} drink={big.drink} side=
        {big.side}
      </h2>
      <button onClick={enterOrder}>Submit</button>
    </div>
  );
};

export default Table1;
