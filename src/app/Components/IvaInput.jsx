"use client";
import React, { useState } from "react";

export default function IVAInput() {
  const [precio, setPrecio] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIVA = () => {
    const valor = parseFloat(precio);
    if (!isNaN(valor)) {
      setResultado(valor * 1.16);
    } else {
      setResultado(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">
      <h3 className="text-lg font-semibold mb-3">Calculadora de IVA (16%)</h3>
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Introduce un precio"
        className="border rounded w-full p-2 mb-3 text-center"
      />
      <button
        onClick={calcularIVA}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Calcular
      </button>
      {resultado !== null && (
        <p className="mt-3 font-medium text-gray-700">
          Total con IVA: ${resultado.toFixed(2)}
        </p>
      )}
    </div>
  );
}