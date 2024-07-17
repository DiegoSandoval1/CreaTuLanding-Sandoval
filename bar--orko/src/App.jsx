import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../../bar--orko/src/components/Cart/Cart';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

const App = () => {
    return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer mensaje="Bienvenido a El Bar Orko de Gutrekka" />} />
            <Route path="/tipo_de_bebidas/:tipo_de_bebidas" element={<ItemListContainer mensaje="Nueztroz Tragoz" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    );
  };
  
  export default App;