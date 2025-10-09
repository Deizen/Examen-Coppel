"use client";
import React from "react";

export default function ModalMessage({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center">
        <h3 className="text-xl font-semibold mb-4">¡Gracias por visitarnos!</h3>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}