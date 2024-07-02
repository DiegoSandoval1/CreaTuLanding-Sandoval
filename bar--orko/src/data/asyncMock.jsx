import React from "react";
import CartWidget from "../components/CardWidget/CardWidget";

const productos = [
  {
      "id": 1,
      "trago": "Zerveza Kryztal",
      "tipo_de_bebida": "alcoholica",
      "Favorito_de": "Loz Hachaz Zangrientaz",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/zervezaOrka.jpg"
  },
  {
      "id": 2,
      "trago": "Vino Orko",
      "tipo_de_bebida": "alcoholica",
      "Favorito_de": "Loz Hachaz Zangrientaz",
      "Precio": 2000,
      "foto_del_producto": "/imagenes/vinoOrko.jpg"
  },
  {
      "id": 3,
      "trago": "Dakka Kola",
      "tipo_de_bebida": "no alcoholica",
      "Favorito_de": "Loz Hachaz Zangrientaz",
      "Precio": 500,
      "foto_del_producto": "/imagenes/dakaKola.jpg"
  },
  {
      "id": 4,
      "trago": "Fernet Garrapato",
      "tipo_de_bebida": "alcoholica",
      "Favorito_de": "Kulto a la Velozidad",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/fernetGarrapato.jpg"
  },
  {
      "id": 5,
      "trago": "Ron Orko",
      "tipo_de_bebida": "alcoholica",
      "Favorito_de": "Kulto a la Velozidad",
      "Precio": 3000,
      "foto_del_producto": "/imagenes/ronOrko.jpg"
  },
  {
      "id": 6,
      "trago": "Jack Danielz",
      "tipo_de_bebida": "alcoholica",
      "Favorito_de": "Kulto a la Velozidad",
      "Precio": 5000,
      "foto_del_producto": "/imagenes/Jack Danielz.jpg"
  }
];

export const conseguirProductos = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos);
      }, 1500);
  });
};

export const alcoholNoAlcohol = (tipo_de_bebida) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod) => prod.tipo_de_bebida === tipo_de_bebida);
        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    });
};



