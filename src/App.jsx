import React from 'react';
import {useState} from 'react';
import {Menu} from '@componentes/navegador';
import { useCarta } from '@hooks';
import {Grupo} from '@componentes/grupo';

function App() {
  const { listaGrupos } = useCarta();
  const [grupoActivo, setGrupoActivo] = useState(
    listaGrupos?.[0] || null // Fallback seguro
  );

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
