import { useIdioma } from '@hooks'; 
import carta from '@data/carta.json'

const useCarta = () => {
  const { traduce } = useIdioma();
  
  const getTraduccion = (tipo, id, campo = 'nombre') => {
    const path = `${tipo}.${id}.${campo}`;
    const traduccion = traduce(path); // Utiliza la función traduce para obtener la traducción
    
    return traduccion || ''; // Fallback normal para otros campos
  };

  // listaGrupos con traducciones
  const listaGrupos = carta.grupos.map(grupo => ({
    id: grupo.id,
    nombre: getTraduccion('grupos', grupo.id),
    secciones: grupo.secciones.map(seccionId => ({
      id: seccionId,
      nombre: getTraduccion('secciones', seccionId)
    }))
  }));

  // Hooks mejorados
  const useGrupo = (grupoId) => {
    const grupo = carta.grupos.find(g => g.id === grupoId);
    return grupo ? {
      ...grupo,
      nombre: getTraduccion('grupos', grupoId)
    } : null;
  };

  const useSeccion = (seccionId) => {
    const seccion = carta.secciones.find(s => s.id === seccionId);
    return seccion ? {
      ...seccion,
      nombre: getTraduccion('secciones', seccionId),
      items: seccion.items.map(itemId => {
        const item = carta.items.find(i => i.id === itemId);
        return item ? {
          ...item,
          nombre: getTraduccion('items', itemId),
          descripcion: getTraduccion('items', itemId, 'descripcion')|| '' // Fallback a cadena vacía si no hay descripción
        } : null;
      })
    } : null;
  };

  const useItem = (itemId) => {
    const item = carta.items.find(i => i.id === itemId);
    return item ? {
      ...item,
      id: itemId,
      nombre: getTraduccion('items', itemId),
      descripcion: getTraduccion('items', itemId, 'descripcion')  || null, // Fallback a null si no hay descripción
    } : null;
  };

  return { listaGrupos, useGrupo, useSeccion, useItem };
};

export default useCarta;



/* import carta from '@data/carta.json';
//import carta from '../data/carta.json';

export const listaGrupos = carta.grupos.map(g => ({
  id: g.id,
  nombre: g.nombre,
  secciones: g.secciones.map(s => ({ id: s, nombre: carta.secciones.find(seccion => seccion.id === s)?.nombre }))
}));

export const useGrupo = (grupoId) => {
  return carta.grupos.find(g => g.id === grupoId) || null;
};


export const useSeccion = (seccionId) => {
  return carta.secciones.find(s => s.id === seccionId) || null;
};

export const useItem = (itemId) => {
  return carta.items.find(i => i.id === itemId) || null;
  //esto devuelte el item completo p.ejemplo {id: 1, nombre: "Ensalada", precio: 10
};

 */

