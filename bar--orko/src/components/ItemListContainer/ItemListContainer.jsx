import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom';
import { conseguirProductos, alcoholNoAlcohol } from '../../utils/firebaseFunctions';

const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([]);
    const { tipo_de_bebidas } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let prod;
                if (tipo_de_bebidas) {
                    prod = await alcoholNoAlcohol(tipo_de_bebidas);
                } else {
                    prod = await conseguirProductos();
                }
                setProductos(prod);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchData();
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
