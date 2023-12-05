// src/components/WelcomeMessage.js
import React from 'react';
import './Inicio.css';

function Inicio() {
    return (
        <div className="welcome-container">
            <div className="blur-background"></div>
            <div className="welcome-content">
                <h1>Bem-vindo ao Nosso Site de Vendas</h1>
            </div>
        </div>
    );
};

export default Inicio;
