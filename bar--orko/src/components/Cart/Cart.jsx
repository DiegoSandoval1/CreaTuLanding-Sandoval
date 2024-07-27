import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/CartContext';

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(Context);
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/checkout');
  };

  // Calcular el total de la compra
  const total = cart.reduce((acc, item) => acc + item.Precio * item.quantity, 0);

  return (
    <div className="container">
      <h2>Tu Karrito</h2>
      {cart.length === 0 ? (
        <p>Tu karrito eztá vazío</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Produkto</th>
                <th>Foto</th>
                <th>Prezio</th>
                <th>Kantidad</th>
                <th>Azzionez</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.trago}</td>
                  <td>
                    <img
                      src={item.foto_del_producto}
                      alt={item.trago}
                      style={{ width: '60px', height: '60px' }}
                    />
                  </td>
                  <td>${item.Precio}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h4>Total de la kompra: ${total.toFixed(2)}</h4>
            <button onClick={clearCart} className="btn btn-warning me-2">Vaziar Karrito</button>
            <button onClick={handleBuy} className="btn btn-success">Komprar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
