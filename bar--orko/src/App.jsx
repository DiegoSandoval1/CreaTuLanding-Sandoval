import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './index.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer mensaje="¡Bienvenidoz al Bar Orko!" />
        </div>
    );
}

export default App;
