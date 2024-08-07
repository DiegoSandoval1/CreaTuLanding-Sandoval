import React, { useState, useContext } from 'react';
import { db } from "../../services/config/firebase";
import { collection, addDoc } from 'firebase/firestore';
import Context from '../../context/CartContext';

const CheckoutForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentType, setPaymentType] = useState('creditCard');
    const [orderId, setOrderId] = useState(null);
    const { clearCart } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'orders'), {
                firstName,
                lastName,
                address,
                paymentType,
                timestamp: new Date()
            });
            setOrderId(docRef.id);
            clearCart(); 
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Ingrese su nombre"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Ingrese su apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Ingrese su dirección"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentType">Tipo de pago</label>
                    <select
                        className="form-control"
                        id="paymentType"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                    >
                        <option value="creditCard">Tarjeta de Krédito</option>
                        <option value="debitCard">Tarjeta de Débito</option>
                        <option value="cash">Efektivo</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            {orderId && <p>¡Graziaz por Komprar, Humie! ID de la orden: {orderId}</p>}
        </div>
    );
};

export default CheckoutForm;