import { useCarta } from '@hooks';
import { Idioma } from '@componentes/navegador';

const NavPrincipal = ({ grupoActivo, setGrupoActivo }) => {
  const handleMenuClick = (grupo) => {
    setGrupoActivo(grupo);
  };

  const { listaGrupos } = useCarta();

  return (
    <nav>
      <ul>
        {listaGrupos?.map((grupo) => (
          <li 
            key={grupo.id} 
            onClick={() => handleMenuClick(grupo)}
            className={grupoActivo?.id === grupo.id ? 'selected' : ''}
          >
            {grupo.nombre}
          </li>
        ))}
        <Idioma />
      </ul>
    </nav>
  );
};
export default NavPrincipal;