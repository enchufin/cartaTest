import React from 'react';
import {useState} from 'react';
import {Menu} from '@componentes/navegador';
import { useCarta } from '@hooks/useCarta';
import {Grupo} from '@componentes/grupo';

function App() {
  const { listaGrupos, useGrupo } = useCarta();
  const [grupoActivo, setGrupoActivo] = useState(
    listaGrupos?.[0] || null // Fallback seguro
  );

  const result = useGrupo('bebidas');
  console.log('Grupo activo:', grupoActivo);
  console.log('grupo bebidas:',result);
  return (
    <>
      <Menu 
        grupoActivo={grupoActivo} 
        setGrupoActivo={setGrupoActivo} 
      />
      {grupoActivo && <Grupo grupoId={grupoActivo.id} />}
    </>
  );
}


export default App
