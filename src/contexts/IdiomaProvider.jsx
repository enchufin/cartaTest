import { useState } from 'react';
import { IdiomaContext } from './IdiomaContext';
import traducciones from '@data/traducciones.json';

export const IdiomaProvider = ({ children }) => {
  const [idiomaActual, setIdiomaActual] = useState('es');

  // Función de traducción corregida
  const traduce = (key) => {
    // Accede dinámicamente al objeto de traducciones
    const partes = key.split('.');
    let resultado = traducciones;
    
    for (const parte of partes) {
      resultado = resultado?.[parte];
      if (resultado === undefined) break;
    }
    
    // Si es un objeto de idiomas, tomar el valor actual
    if (resultado && typeof resultado === 'object' && !Array.isArray(resultado)) {
    return resultado[idiomaActual] || '';
  }

    return resultado|| ''; 
  };

  // Función para cambiar idioma
  const cambioDeIdioma = (nuevoIdioma) => {
    setIdiomaActual(nuevoIdioma);
  };

  return (
    <IdiomaContext.Provider 
      value={{ 
        idiomaActual, 
        traduce,
        cambioDeIdioma 
      }}
    >
      {children}
    </IdiomaContext.Provider>
  );
};
// Aqui se define el IdiomaProvider, que es un componente que proporciona el contexto de idioma a toda la aplicación.

// El IdiomaProvider utiliza el hook useState para manejar el estado del idioma actual y la función traduce para traducir las claves de traducción.

// La función cambioDeIdioma se utiliza para cambiar el idioma actual.

// El IdiomaProvider envuelve a sus hijos con el IdiomaContext.Provider, proporcionando el idioma actual, la función de traducción y la función para cambiar el idioma a todos los componentes que lo necesiten.

// Esto permite que cualquier componente dentro del IdiomaProvider pueda acceder al contexto de idioma y utilizar la función de traducción.

// El IdiomaProvider es esencial para la internacionalización de la aplicación, permitiendo que los textos se muestren en diferentes idiomas según la preferencia del usuario.