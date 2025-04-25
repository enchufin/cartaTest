import {useCarta} from '@hooks/useCarta';
import { useIdioma } from '@contexts/IdiomaContext';

const Item = ({ itemId }) => {
      const { useItem } = useCarta();
      const item = useItem(itemId);
      const { traduce } = useIdioma();

      if (!item) return null;
      
      return (
            <div className="item">
                  <h4>{item?.nombre}</h4>
                  {item?.descripcion && <p>{item.descripcion}</p>}
                  <p>{traduce('menu.precio')}: {item.precio?.toFixed(2)}€</p>
                  {/* item?.imagen && <img src={item.imagen} alt={item.nombre} /> */}
            </div>
      );
}

export default Item;