import React from "react";
import CartWidget from "../components/CardWidget/CardWidget";

const productos = [
  {
      "trago": "Zerveza Kryztal",
      "tipo_de_bebida": "alcoholica",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/zervezaOrka.jpg"
  },
  {
      "trago": "Vino Orko",
      "tipo_de_bebida": "alcoholica",
      "Precio": 2000,
      "foto_del_producto": "/imagenes/vinoOrko.jpg"
  },
  {
      "trago": "Dakka Kola",
      "tipo_de_bebida": "no alcoholica",
      "Precio": 500,
      "foto_del_producto": "/imagenes/dakaKola.jpg"
  },
  {
      "trago": "Fernet Garrapato",
      "tipo_de_bebida": "alcoholica",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/fernetGarrapato.jpg"
  },
  {
      "trago": "Ron Orko",
      "tipo_de_bebida": "alcoholica",
      "Precio": 3000,
      "foto_del_producto": "/imagenes/ronOrko.jpg"
  },
  {
      "trago": "Jack Danielz",
      "tipo_de_bebida": "alcoholica",
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

