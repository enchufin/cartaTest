import { useIdioma } from '@contexts/IdiomaContext';

const SelectorIdioma = () => {
  const { idiomaActual, cambioDeIdioma } = useIdioma();

  return (
    <div>
      <select
        value={idiomaActual}
        onChange={(e) => cambioDeIdioma(e.target.value)}
        className="bg-gray-700 text-white p-1 rounded"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default SelectorIdioma;