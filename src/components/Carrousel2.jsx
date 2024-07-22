export default function Carrousel2() {
  return (
    <>
      <div className="relative bg-[url('https://placehold.co/1920x1080')] bg-cover bg-center h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-purple-600 opacity-75"></div>
        <div className="relative z-10">
          <img
            src="https://placehold.co/100x100?text=Logo"
            alt="logo"
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold">PLÁSTICO RENOVADO</h1>
          <p className="mt-4 text-lg md:text-xl">
            Del plástico reciclado a nuevas posibilidades.
          </p>
          <button className="mt-8 bg-white text-black py-2 px-4 rounded-lg">
            PLÁSTICOS RECICLADOS POSCONSUMO
          </button>
        </div>
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button className="text-white text-2xl">&lt;</button>
          <button className="text-white text-2xl">&gt;</button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="block w-3 h-3 bg-white rounded-full"></span>
          <span className="block w-3 h-3 bg-white rounded-full"></span>
          <span className="block w-3 h-3 bg-white rounded-full"></span>
          <span className="block w-3 h-3 bg-white rounded-full"></span>
          <span className="block w-3 h-3 bg-white rounded-full"></span>
        </div>
      </div>
    </>
  );
}
