import { createContext, useContext } from 'react';

export const IdiomaContext = createContext();

//hook personalizado
export const useIdioma = () => {
  const context = useContext(IdiomaContext);
  if (!context) {
    throw new Error('useIdioma debe usarse dentro de un IdiomaProvider');
  }
  return context;
};

// El IdiomaContext es un contexto de React que se utiliza para manejar la internacionalización (i18n) de la aplicación.

// El IdiomaContext se crea utilizando createContext y se exporta para que pueda ser utilizado en otros componentes.

// El hook useIdioma es un hook personalizado que permite acceder al contexto de idioma.
// Este hook utiliza useContext para obtener el contexto de IdiomaContext y lanza un error si se intenta usar fuera de un IdiomaProvider.
// Esto asegura que el contexto de idioma esté disponible en cualquier componente que lo necesite, facilitando la traducción de textos y la gestión del idioma actual de la aplicación.