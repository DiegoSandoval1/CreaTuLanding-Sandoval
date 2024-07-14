import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { conseguirProductos } from '../../data/asyncMock';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        conseguirProductos().then((productos) => {
            const item = productos.find((prod) => prod.id === parseInt(id));
            setProducto(item);
        }).catch((error) => console.log(error));
    }, [id]);

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
