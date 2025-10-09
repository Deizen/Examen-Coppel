export default function Header({ contadorCarrito }: { contadorCarrito: number }) {
  return (
    <header className="flex justify-between items-center mb-12  p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Tienda de mascotas</h2>
      <div className="flex items-center space-x-2">
        <span>🛒</span>
        <span className="font-bold">{contadorCarrito}</span>
      </div>
    </header>
  );
}