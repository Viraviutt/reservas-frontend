export default function DashboardPage() {
  return (
    <div className="flex flex-row flex-1 h-screen w-screen items-center justify-start bg-zinc-50 font-sans">
        <nav className="flex flex-col h-full items-center justify-start p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold pt-10 pb-30">Mi Aplicación</h1>
            <div className="flex flex-col items-center justify-center gap-15">
                <button className="hover:underline">Inicio</button>
                <button className="hover:underline">Perfil</button>
                <button className="hover:underline">Salir</button>
            </div>
        </nav>
        <div className="flex w-lvw h-lvw rounded-2xl flex-col items-center justify-center py-32 px-16 bg-red-500 sm:items-start">
            <main className="flex flex-col items-center justify-center bg-blue-800">
                <h1 className="text-5xl font-bold text-white">Dashboard</h1>
            </main>
        </div>
    </div>
  );
}