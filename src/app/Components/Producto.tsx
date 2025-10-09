export default function Producto({
  producto,
  onAgregarCarrito,
}: {
  producto: any;
  onAgregarCarrito: () => void;
}) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center hover:shadow-lg transition">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold">{producto.nombre}</h3>
      <p className="text-gray-600 mb-2">${producto.precio}</p>
      <button
        onClick={onAgregarCarrito}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
}