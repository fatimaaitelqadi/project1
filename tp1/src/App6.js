// App.js
import React from 'react';
import Button from './Button';

function App() {
    // Définir la fonction handleClick
    const handleClick = () => {
        alert('Le bouton a été cliqué !');
    };

    return (
        <div>
            <h1>Bienvenue dans l'application</h1>
            {/* Passer la fonction handleClick en prop */}
            <Button handleClick={handleClick} />
        </div>
    );
}

export default App;
