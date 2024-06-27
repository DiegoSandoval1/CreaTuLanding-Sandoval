import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/itemList'; 
import { alcoholNoAlcohol, conseguirProductos } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([]);
    const { tipo_de_bebidas } = useParams();

    useEffect(() => {
        const fetchData = tipo_de_bebidas ? alcoholNoAlcohol(tipo_de_bebidas) : conseguirProductos();

        fetchData
            .then((prod) => {
                setProductos(prod);
            })
            .catch((error) => console.log(error));
    }, [tipo_de_bebidas]);

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