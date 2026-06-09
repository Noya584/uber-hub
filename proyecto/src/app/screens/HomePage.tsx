export function HomePage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)] bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-3">Bienvenido a Uber Hub</h1>
        <p className="text-gray-500 text-lg">Selecciona <span className="font-medium text-black">Grupos</span> en el menú para gestionar tus viajes</p>
      </div>
    </div>
  );
}
