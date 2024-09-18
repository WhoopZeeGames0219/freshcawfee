// eslint-disable-next-line react/prop-types
export default function Alerta({ children }) {
    return (
        <div className="text-center my-2 bg-red-600 p-3 text-white font-bold uppercase">
            {children}
        </div>
    )
}
