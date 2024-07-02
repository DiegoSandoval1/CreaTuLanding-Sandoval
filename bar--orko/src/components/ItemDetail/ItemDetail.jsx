import React from "react";

const ItemDetail = ({ producto }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-5 border-warning h-100 text-center">
                        <img className="card-img-top mx-auto" src={producto.foto_del_producto} alt={producto.trago} style={{ width: '120px', height: '400px' }} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.trago}</h5>
                            <p className="card-text">Precio: ${producto.Precio}</p>
                            <p className="card-text">Favorito de: {producto.Favorito_de}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
