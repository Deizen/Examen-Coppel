import "../styles/globals.css";

export const metadata = {
  title: "Tienda de mascotas 🐾",
  description: "En esta pagina se podran ver productos para mascotas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}