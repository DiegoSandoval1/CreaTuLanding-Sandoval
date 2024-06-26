import React from "react";

const ItemList = ({ productos, agregarAlCarrito }) => {
    return (
        <div className="row">
            {productos.map((prod, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <div className="card border-5 border-warning h-100">
                        <img className="card-img-top mx-auto" src={prod.foto_del_producto} alt={prod.trago} />
                        <div className="card-body">
                            <h5 className="card-title">{prod.trago}</h5>
                            <p className="card-text">Precio: ${prod.Precio}</p>
                            <button className="btn btn-primary" onClick={() => agregarAlCarrito(prod.trago, prod.Precio)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;



