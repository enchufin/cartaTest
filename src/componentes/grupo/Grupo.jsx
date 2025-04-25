import { useCarta } from '@hooks/useCarta';
import { Seccion } from '@componentes/seccion';

const Grupo = ({ grupoId }) => {
  const { useGrupo } = useCarta();
  const grupo = useGrupo(grupoId);



  return (
    <div>
      <h2>{grupo?.nombre}</h2>
      {grupo?.secciones.map(seccionId => (
        <Seccion key={seccionId} seccionId={seccionId} />
      ))}
    </div>
  );
};

export default Grupo;