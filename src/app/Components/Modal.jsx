"use client";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // No renderizamos nada en el server

  return ReactDOM.createPortal(
    <div
      className="
        fixed inset-0 
        flex items-center justify-center 
        bg-black bg-opacity-60 
        z-[9999]
        backdrop-blur-sm
      "
    >
      <div
        className="
          bg-white p-6 rounded-2xl shadow-2xl 
          max-w-sm w-[90%] text-center animate-fadeIn
        "
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          ¡Gracias por visitarnos!
        </h3>
        <p className="text-gray-600 mb-6">
          Este es un ejemplo de ventana emergente modal.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
}