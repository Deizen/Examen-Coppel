"use client";

import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Producto from "../Components/Producto";
import IVAInput from "../Components/IVAInput";
import Modal from "../Components/Modal";
import ImagenVariable from "../Components/ImagenVariable";

export default function MascotasPage() {
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [productos, setProductos] = useState<any[]>([]);

  // const abrirModal = () => setModalAbierto(true);
  // const cerrarModal = () => setModalAbierto(false);

  const agregarAlCarrito = () => setContadorCarrito((prev) => prev + 1);

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
      {/* Aqui se recorren los productos */}
      <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-6
            justify-items-center
        "
        >
        {productos.length > 0 ? (
          productos.map((p) => (
            <Producto key={p.id} producto={p} onAgregarCarrito={agregarAlCarrito} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Cargando productos...</p>
        )}
      </div>
      
      {/* Calculadora de IVA */}
      <section className="max-w-md mx-auto mt-12">
        <IVAInput />
      </section>

      {/* Botón para abrir modal */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setMostrarModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Abrir Mensaje Modal
        </button>
      </div>

      {/* Modal */}
      {mostrarModal && <Modal onClose={() => setMostrarModal(false)} />}

      {/* Script que obtiene info de imágenes */}
      <ImagenVariable />
      
    </div>
  );
}