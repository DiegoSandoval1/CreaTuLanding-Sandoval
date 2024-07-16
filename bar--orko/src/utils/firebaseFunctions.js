
import { db } from '../services/config/firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

export const conseguirProductos = async () => {
    try {
        const productosCollection = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCollection);
        const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return productosList;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
};

export const alcoholNoAlcohol = async (tipo_de_bebida) => {
    try {
        const productosCollection = collection(db, 'productos');
        const q = query(productosCollection, where('tipo_de_bebida', '==', tipo_de_bebida));
        const productosSnapshot = await getDocs(q);
        const productosFiltrados = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return productosFiltrados;
    } catch (error) {
        console.error('Error al filtrar productos:', error);
        throw error;
    }
};
