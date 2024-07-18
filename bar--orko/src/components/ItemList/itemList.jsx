import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from '../../context/CartContext';

const ItemList = ({ productos }) => {
  const { addItem } = useContext(Context);

  const handleAddToCart = (producto) => {
    addItem(producto, 1); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {productos.map((prod, index) => (
          <div key={index} className="col-md-4 col-lg-4 mb-4">
            <div className="card border-5 border-warning h-100 text-center">
              <img
                className="card-img-top mx-auto"
                src={prod.foto_del_producto}
                alt={prod.trago}
                style={{ width: "120px", height: "400px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.trago}</h5>
                <p className="card-text">Precio: ${prod.Precio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(prod)}
                >
                  Agregar al carrito
                </button>
                <Link to={`/item/${prod.id}`} className="btn btn-secondary mt-2">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
