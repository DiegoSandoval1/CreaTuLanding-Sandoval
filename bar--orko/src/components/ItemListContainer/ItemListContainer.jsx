import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList/itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config/firebase';

const ItemListContainer = ({ mensaje }) => {
    const [productos, setProductos] = useState([]);
    const { tipo_de_bebidas } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosCollection = collection(db, 'productos');
                let q;
                if (tipo_de_bebidas) {
                    q = query(productosCollection, where('tipo_de_bebida', '==', tipo_de_bebidas));
                } else {
                    q = query(productosCollection);
                }
                const productosSnapshot = await getDocs(q);
                const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(productosList);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, [tipo_de_bebidas]);

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList productos={productos} />
        </div>
    );
};

ItemListContainer.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer;