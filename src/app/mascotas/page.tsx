"use client";

import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Producto from "../Components/Producto";


export default function MascotasPage() {
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [productos, setProductos] = useState<any[]>([]);

  const handleAddToCart = () => setContadorCarrito((prev) => prev + 1);

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then(setProductos)
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  console.log("Productos cargados:", productos);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <Header contadorCarrito={contadorCarrito} />

      <h1 className="text-2xl font-bold mb-4 text-center">Categoría: Mascotas 🐾</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.length > 0 ? (
          productos.map((p) => (
            <Producto key={p.id} producto={p} onAgregarCarrito={handleAddToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Cargando productos...</p>
        )}
      </div>

    </div>
  );
}