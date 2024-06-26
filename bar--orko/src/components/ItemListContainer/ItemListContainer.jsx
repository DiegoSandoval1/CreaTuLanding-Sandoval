import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/itemList'; 
import { conseguirProductos } from '../../data/asyncMock';

const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        conseguirProductos()
            .then((prod) => {
                setProductos(prod);
            })
            .catch((error) => console.log(error));
    }, []);

    const agregarAlCarrito = (trago, precio) => {
        console.log(`Agregado ${trago} por ${precio}`);
    };

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
    );
};

ItemListContainer.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer;



