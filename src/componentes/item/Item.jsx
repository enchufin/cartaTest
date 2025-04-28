import {useCarta} from '@hooks';
import {PrecioItem} from '@item';

const Item = ({ grupoId, seccionId, itemId }) => {
      const { useItem } = useCarta();
      const item = useItem(itemId);
      //const { traduce } = useIdioma();

      if (!item) return null;
      
      return (
            <div className="item">
                  <h4>{item?.nombre}</h4>
                  {item?.descripcion && <p>{item.descripcion}</p>}
                  <PrecioItem 
                        itemId={itemId} 
                        grupoId={grupoId}
                        seccionId={seccionId}
                  />
                  {/*
                   <p>{traduce('menu.precio')}: {item.precio?.toFixed(2)}€</p>
                   item?.imagen && <img src={item.imagen} alt={item.nombre} /> 
                  */}
            </div>
      );
}

export default Item;