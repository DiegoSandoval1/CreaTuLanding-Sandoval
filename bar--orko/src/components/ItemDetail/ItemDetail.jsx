import React, { useState, useContext, useEffect } from "react";
import { Context as CartContext } from '../../context/CartContext'; 
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
    const { addItem, isItemInCart, getItemQuantity } = useContext(CartContext); 
    const [showCount, setShowCount] = useState(!isItemInCart(producto.id));
    const [initialCount, setInitialCount] = useState(1);

    useEffect(() => {
        if (isItemInCart(producto.id)) {
            setInitialCount(getItemQuantity(producto.id));
        }
    }, [isItemInCart, producto.id, getItemQuantity]);

    const handleAdd = (quantity) => {
        const item = {
            id: producto.id,
            trago: producto.trago,
            Precio: producto.Precio,
        };
        addItem(item, quantity);
        setShowCount(false); 
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
                            <p className="card-text">Precio: ${producto.Precio}</p>
                            <p className="card-text">Favorito de: {producto.Favorito_de}</p>
                            {showCount ? (
                                <ItemCount
                                    stock={producto.stock}
                                    initial={initialCount}
                                    onAdd={handleAdd}
                                    producto={producto} 
                                />
                            ) : (
                                <p>Producto agregado al karrito, ¡humie!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
