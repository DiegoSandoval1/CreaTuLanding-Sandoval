import React from "react";
import CartWidget from "../components/CardWidget/CardWidget";

const productos = [
  {
      "trago": "Zerveza Kryztal",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/zervezaOrka.jpg"
  },
  {
      "trago": "Vino Orko",
      "Precio": 2000,
      "foto_del_producto": "/imagenes/vinoOrko.jpg"
  },
  {
      "trago": "Dakka Kola",
      "Precio": 500,
      "foto_del_producto": "/imagenes/dakaKola.jpg"
  },
  {
      "trago": "Fernet Garrapato",
      "Precio": 1000,
      "foto_del_producto": "/imagenes/fernetGarrapato.jpg"
  },
  {
      "trago": "Ron Orko",
      "Precio": 3000,
      "foto_del_producto": "/imagenes/ronOrko.jpg"
  },
  {
      "trago": "Jack Danielz",
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
