import { useCarta } from '@hooks/useCarta';
import {Item} from '@componentes/item';

const Seccion = ({ seccionId }) => {
  const { useSeccion } = useCarta();
  const seccion = useSeccion(seccionId);

  return (
    <div className="seccion">
      <h3>{seccion?.nombre}</h3>
      <div className="items">
            {seccion?.items?.map(item => (
                  <Item key={item.id} itemId={item.id}/>
            ))}      
      </div>
    </div>
  );
};

export default Seccion;