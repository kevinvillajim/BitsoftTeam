export default function Header() {
	return (
		<>
			<nav className="bg-white shadow-md p-4 flex justify-between items-center">
				<div className="flex items-center">
					<img
						src="https://placehold.co/100x40?text=Bitsoft"
						alt="Bitsoft Logo"
						className="h-10"
					/>
					<div className="ml-4">
						<span className="text-zinc-600">Nuestras marcas</span>
						<svg
							className="w-4 h-4 inline-block ml-1"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
						</svg>
					</div>
				</div>
				<div className="flex space-x-6">
					<a href="#" className="text-zinc-600">
						Conocer Más
					</a>
					<a href="#" className="text-zinc-600">
						Descubrir
					</a>
					<a href="#" className="text-zinc-600">
						Empresa
					</a>
					<a href="#" className="text-zinc-600">
						Asistencia
					</a>
				</div>
				<div className="flex items-center space-x-4">
					<a href="#" className="text-zinc-600">
						Latinoamérica
					</a>
					<div className="relative">
						<input
							type="text"
							placeholder="Buscar..."
							className="border rounded-full px-4 py-1"
						/>
						<svg
							className="w-4 h-4 absolute top-2 right-3"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" />
						</svg>
					</div>
					<a href="#" className="text-zinc-600">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM8 9a2 2 0 114 0 2 2 0 01-4 0zM10 14a7 7 0 00-6.93 6h13.86A7 7 0 0010 14z" />
						</svg>
					</a>
				</div>
			</nav>
		</>
	);
}
