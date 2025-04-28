import { useCarta } from '@hooks';
import { Seccion } from '@componentes/seccion';

const Grupo = ({ grupoId }) => {
  const { useGrupo } = useCarta();
  const grupo = useGrupo(grupoId);



  return (
    <div>
      <h2>{grupo?.nombre}</h2>
      {grupo?.secciones.map(seccionId => (
        <Seccion 
          key={seccionId}  
          grupoId={grupoId}
          seccionId={seccionId} 
        />
      ))}
    </div>
  );
};

export default Grupo;