export default function CardsClientes() {
	return (
		<>
			<div className="flex justify-center items-center h-screen bg-background">
				<div className="w-full max-w-6xl">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div className="col-span-2 md:col-span-1 flex flex-col items-center p-6 border border-primary rounded-lg shadow-lg transition-transform transform hover:scale-105">
							<img
								src="https://openui.fly.dev/openui/300x150.svg?text=Keyboard+and+Mouse"
								alt="Keyboard and Mouse"
								className="mb-4"
							/>
							<span className="text-center text-primary-foreground font-semibold text-lg">
								MOUSE Y TECLADOS
							</span>
						</div>
						<div className="col-span-2 md:col-span-1 flex flex-col items-center p-6 border border-primary rounded-lg shadow-lg transition-transform transform hover:scale-105">
							<img
								src="https://openui.fly.dev/openui/300x150.svg?text=Headphones"
								alt="Headphones"
								className="mb-4"
							/>
							<span className="text-center text-primary-foreground font-semibold text-lg">
								AUDÍFONOS CON MICRÓFONO Y AURICULARES
							</span>
						</div>
						<div className="col-span-1 flex flex-col items-center p-6 border border-primary rounded-lg shadow-lg transition-transform transform hover:scale-105">
							<img
								src="https://openui.fly.dev/openui/150x150.svg?text=Mobile+Devices"
								alt="Mobile Devices"
								className="mb-4"
							/>
							<span className="text-center text-primary-foreground font-semibold text-lg">
								DISPOSITIVOS MÓVILES
							</span>
						</div>
						<div className="col-span-1 flex flex-col items-center p-6 border border-primary rounded-lg shadow-lg transition-transform transform hover:scale-105">
							<img
								src="https://openui.fly.dev/openui/150x150.svg?text=Streaming"
								alt="Streaming"
								className="mb-4"
							/>
							<span className="text-center text-primary-foreground font-semibold text-lg">
								STREAMING
							</span>
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<button className="w-3 h-3 bg-primary rounded-full mx-1 transition-colors hover:bg-primary/80"></button>
						<button className="w-3 h-3 bg-muted rounded-full mx-1 transition-colors hover:bg-muted/80"></button>
						<button className="w-3 h-3 bg-muted rounded-full mx-1 transition-colors hover:bg-muted/80"></button>
					</div>
				</div>
			</div>
		</>
	);
}
