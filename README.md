# TRASFONDO DEL BAR ORKO DE GUTREKA

En el cruel y oscuro futuro del milenio 41 ¡Solo hay Guerra, y un bar orko!
                                        
                                        
              *@@@@@.                   
             .@@@@@@@@@@@@@             
       .@@@@@@@@@@@@@@@@@@@.            
       @@@@@@@@@@@@@@@@@@@@@@@@@.       
      .@@@@@@@:    .@@@@@@-@@@@@-       
      ..@@@@@@.    .@@@..  .@@@@@.      
         .+@@@@@..@@@@@@@@@@@@@@@:      
            .@@@@@@@.@@@@@@... ...      
         =@  @@@@@@@@@@@@@@             
         @@. @@@@@@@@@@@@@.             
        .@@. @@@@@@*@@@@@@.  .@.        
       .@@@@ @.@@@.@:@@.     @@@        
       .@@@@ . .@.@@@.@.@@  @@@@.       
       @@@@@#@@..@@@@@ .@@@.@@@@        
      .@@@@@@@@@#@@@@@@@@@@@@@@@.       
       .@@@@@@@@@@@@@@@@@@@@@@@@.       
         ..@@@@@@@@@@@@@@@@@@@.         
            .%@@@@@@@@@@@@@..           
               .@@@@@@@@..              
                 ..@@=                  
                                        



# E-commerce de Alcohol sobre los Orkos de Warhammer 40,000

Este es un E-commerse temático sobre un bar con temática de los Orkos de Warhammer 40,000. Para este proyecto se uso React.js para su construcción, Firebase para almacenar datos, y Boostrap para el diseño artístico. 

## Características escenciales

- Navegación con React Router
- Carrito de compras manejado con contexto
- Integración con Firestore para almacenar y obtener datos
- Página de checkout con creación de ID de orden

## Requisitos

- Node.js
- npm 

## Instalación

1. Clona este repositorio:
    $ bash git clone https://github.com/DiegoSandoval1/ProyectoFinal_Sandoval

2. Navega al directorio del proyecto:
    $ bash cd ProyectoFinal_Sandoval

3. Instala las dependencias:
    $ bash npm install

4. Configura Firebase (en caso de no funcionar):
    - Crea un proyecto en Firebase.
    - Configura Firestore.
    - Agrega tu configuración de Firebase en `src/services/config/firebase.js`:
    ```javascript
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyCKybcphlheV1kd69Ep6wuzzzFvWfc3iVE",
        authDomain: "elbarorko.firebaseapp.com",
        projectId: "elbarorko",
        storageBucket: "elbarorko.appspot.com",
        messagingSenderId: "1047231478245",
        appId: "1:1047231478245:web:b02c0975fea4e97e6dd70c"
        };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```

## Uso

1. Inicia el servidor de desarrollo:
    $ bash npm start

2. Abre tu navegador en `http://localhost:5173` para ver la aplicación en funcionamiento.

3. ¡LISTO, HUMIE!


