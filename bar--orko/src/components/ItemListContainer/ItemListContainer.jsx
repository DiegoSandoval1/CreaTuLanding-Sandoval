import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ mensaje }) => {
    return (
        <div>
            <h1>{mensaje}</h1>
            {/* Graziaz por komprar algo */}
        </div>
    );
}

ItemListContainer.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default ItemListContainer;

