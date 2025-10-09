import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "Tienda de mascotas",
  description: "En esta pagina se podran ver productos para mascotas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className="
          min-h-screen 
          bg-gray-100 
          text-gray-900 
          antialiased 
          relative 
          overflow-visible
        "
        style={{ position: "static" }} // 🔹 evita encerrar los elementos fixed
      >
        {/* Contenido principal */}
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}