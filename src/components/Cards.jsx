export default function Cards() {
	return (
		<>
			<div className="bg-background text-foreground">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
					<div className="text-center">
						<img
							src="https://placehold.co/400x300"
							alt="person with headset"
							className="w-full h-auto"
						/>
						<h3 className="mt-4 text-xl font-semibold">
							INALÁMBRICA PARA TODOS, CON CERTIFICACIÓN EMPRESARIAL
						</h3>
						<p className="mt-2 text-muted-foreground">
							Auriculares ligeros ideales para implementación masiva, con
							excelente audio y conexiones confiables.
						</p>
						<a
							href="#"
							className="mt-4 inline-block text-primary hover:underline font-thin"
						>
							DESCUBRIR AHORA
						</a>
					</div>
					<div className="text-center">
						<img
							src="https://placehold.co/400x300"
							alt="ergonomic mouse"
							className="w-full h-auto"
						/>
						<h3 className="mt-4 text-xl font-semibold">LEVÁNTATE CON TODO</h3>
						<p className="mt-2 text-muted-foreground">
							con Lift Vertical Ergonomic Mouse
						</p>
						<a
							href="#"
							className="mt-4 inline-block text-primary hover:underline font-thin"
						>
							DESCUBRIR LIFT
						</a>
					</div>
					<div className="text-center">
						<img
							src="https://placehold.co/400x300"
							alt="person with wireless headset"
							className="w-full h-auto"
						/>
						<h3 className="mt-4 text-xl font-semibold">
							LOS AURICULARES INALÁMBRICOS ESENCIALES
						</h3>
						<p className="mt-2 text-muted-foreground">
							Usa tecnología inalámbrica y mantente conectado. Disfruta de un
							excelente audio, micrófonos con cancelación de ruido y libertad de
							movimiento con Zone 300.
						</p>
						<a
							href="#"
							className="mt-4 inline-block text-primary hover:underline font-thin"
						>
							DESCUBRIR AHORA
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
