import React, { useContext } from "react";
import Context from "../../context/CartContext";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

const ItemDetail = ({ producto }) => {
    const { addItem } = useContext(Context);

    const onAdd = (quantity) => {
        const item = {
            id: producto.id,
            trago: producto.trago,
            Precio: producto.Precio
        };

        addItem(item, quantity);
        console.log(`Agregaste ${quantity} productos`);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-5 border-warning h-100 text-center">
                        <img
                            className="card-img-top mx-auto"
                            src={producto.foto_del_producto}
                            alt={producto.trago}
                            style={{ width: '120px', height: '400px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{producto.trago}</h5>
                            <p className="card-text">Prezio: ${producto.Precio}</p>
                            <p className="card-text">Favorito de: {producto.Favorito_de}</p>
                            <button onClick={() => onAdd(1)} className="btn btn-primary">Agregar al karrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;