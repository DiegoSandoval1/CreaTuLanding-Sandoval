import React, { useContext } from 'react';
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(Context);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <span role="img" aria-label="cart">🛒</span>
      {totalItems > 0 ? (
        <span className="badge bg-danger ms-2">{totalItems}</span>
      ) : (
        <span className="ms-2">0</span>
      )}
    </div>
  );
};

export default CartWidget;
