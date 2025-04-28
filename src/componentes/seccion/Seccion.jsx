import { useCarta } from '@hooks';
import {Item} from '@componentes/item';

const Seccion = ({ grupoId, seccionId }) => {
  const { useSeccion } = useCarta();
  const seccion = useSeccion(seccionId);

  return (
    <div className="seccion">
      <h3>{seccion?.nombre}</h3>
      <div className="items">
            {seccion?.items?.map(item => (
                  <Item 
                    key={item.id} 
                    grupoId={grupoId}
                    seccionId={seccionId}
                    itemId={item.id}/>
            ))}      
      </div>
    </div>
  );
};

export default Seccion;