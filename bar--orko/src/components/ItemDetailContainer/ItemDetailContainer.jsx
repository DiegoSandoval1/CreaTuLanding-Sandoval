import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../services/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const productoDoc = doc(db, 'productos', id);  
                const productoSnapshot = await getDoc(productoDoc);

                if (productoSnapshot.exists()) {
                    setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
                } else {
                    console.log("¡No exizte tal koza, humie!");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducto();
    }, [id]);

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <p>Kargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
