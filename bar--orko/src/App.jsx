import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer mensaje="Bienvenido a El Bar Orko de Gutrekka" />} />
                    <Route path="/tipo_de_bebidas/:tipo_de_bebidas" element={<ItemListContainer mensaje="Nueztroz Tragoz" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
