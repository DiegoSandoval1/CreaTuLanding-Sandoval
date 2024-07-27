import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

const ItemCount = ({ stock, initial, onAdd, producto }) => {
  const [count, setCount] = useState(initial);
  const { updateItemQuantity } = useContext(Context);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      updateItemQuantity(producto.id, count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      updateItemQuantity(producto.id, count - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
      <button className="btn btn-primary ml-3" onClick={() => onAdd(count)}>Agregar al karrito</button>
    </div>
  );
};

export default ItemCount;
