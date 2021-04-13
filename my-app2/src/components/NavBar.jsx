import React from 'react';



export function NavBar(props) {
    return (
        <nav>
                <h1> Brand </h1>
                <input type="text" placeholder="buscar"/>
                <i aria-hidden="true"></i>
                <a className="reset" href="">inicio </a>
                <a className="reset" href="">Iniciar Sesión</a>
                <a className="reset" href="">Crear Usuario</a>
                <a className="reset" href="">Carrito 0</a>
        </nav>) 
        };