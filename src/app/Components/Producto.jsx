"use client"

export default function Producto({ producto, onAgregarCarrito }) {
  return (
   
    <div
      className="
        bg-white shadow rounded-xl 
        p-4 sm:p-5 text-center 
        hover:shadow-lg transition 
        flex flex-col items-center
        w-full max-w-[300px]
      "
    >
      <div
        className="
          w-full h-[220px] 
          rounded-lg overflow-hidden mb-3 
          bg-gray-100 flex items-center justify-center
        "
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="
            w-full h-full object-cover object-center
            transition-transform duration-300
            hover:scale-105
          "
          loading="lazy"
        />
      </div>

      <h3 className="font-semibold text-lg mb-1 truncate w-full">
        {producto.nombre}
      </h3>

      <p className="text-gray-600 mb-3 text-base">${producto.precio}</p>

      <button
        onClick={onAgregarCarrito}
        className="
          bg-green-600 text-white px-4 py-2 rounded-lg 
          hover:bg-green-700 transition-colors
          text-sm w-full
        "
      >
        Agregar al carrito
      </button>
    </div>
  );
}