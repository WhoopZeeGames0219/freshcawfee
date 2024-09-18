import useQuiosco from "../hooks/useQuiosco"

// eslint-disable-next-line react/prop-types
export default function Categoria({ categoria }) {

  const { handleClickCategoria, categoriaActual } = useQuiosco();
  // eslint-disable-next-line react/prop-types
  const { icono, nombre, id } = categoria
  const resaltarCategoriaActual = () => categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'

  return (
    <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12" />
      <button className="text-lg font-bold cursor-ponter truncate" type="button" onClick={() => handleClickCategoria(id)}>{nombre}</button>
    </div>
  )
}
