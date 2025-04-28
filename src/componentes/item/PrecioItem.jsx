import { usePrecio } from '@hooks';
const PrecioItem = ({ itemId, grupoId, seccionId }) => {
      
      const { getPrecio } = usePrecio();
      const precio = getPrecio(grupoId, seccionId, itemId);

      if (!precio) return null;

      return (
        <div className="precio-item">
          {precio.tipo === 'fijo' && <span>{precio.valor}</span>}
          {precio.tipo === 'variable' && <span>{precio.valor}</span>}
          {precio.tipo === 'formato' && (
            <div className="formatos">
              {precio.formatos.map((formato) => (
                <div key={formato.id} className="formato">
                  <span>{formato.nombre}</span>
                  <span>{formato.precio}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };
    
    export default PrecioItem;