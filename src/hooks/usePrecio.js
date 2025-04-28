import precios from '@data/precios.json';
import { useIdioma } from '@hooks';

const usePrecio = () => {
  const { traduce } = useIdioma();

  const getPrecio = (grupoId, seccionId, itemId) => {
    const precioData = precios?.[grupoId]?.[seccionId]?.[itemId];
    if (!precioData) return null;

    switch (precioData.tipo) {
      case 'fijo':
        return {
          tipo: 'fijo',
          valor: `${precioData.precio.toFixed(2)}€`,
          raw: precioData.precio
        };
      case 'variable':
        return {
          tipo: 'variable',
          valor: traduce('variable.nombre') || "Precio variable"
        };
      case 'formato':
        return {
          tipo: 'formato',
          formatos: precioData.formato.map(f => ({
            id: f.id,
            nombre: traduce(`formato.${f.id}.nombre`),
            precio: `${f.precio.toFixed(2)}€`
          }))
        };
      default:
        return null;
    }
  };

  return { getPrecio };
};

export default usePrecio;