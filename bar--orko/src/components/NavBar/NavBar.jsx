import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CardWidget/CardWidget';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';  
import logo from '../../assets/img/logo_orko.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
                    El Bar Orko de Gutrekka
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tipo_de_bebidas/alcoholica">Bebidaz Alkokólikaz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tipo_de_bebidas/no alcoholica">Bebidaz Zin Alkohol</Link>
                        </li>
                    </ul>
                    <Link className="nav-link text-light" to="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;