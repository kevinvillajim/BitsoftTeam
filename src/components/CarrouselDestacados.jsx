export default function CarrouselDestacados() {
	return (
		<>
			<h2 className="text-2xl font-bold text-center mb-8">
				Productos destacados
			</h2>

			<div className="flex space-x-4 overflow-x-auto">
				<div className="flex-shrink-0 w-64 bg-card p-4 rounded-lg shadow-md">
					<img
						src="https://placehold.co/150x150"
						alt="4K ColorVu Fixed Bullet Solar Power 4G Network Camera Kit"
						className="mb-4 mx-auto"
					/>
					<h3 className="text-lg font-semibold mb-2">
						DS-2XS6A87G1-L/C32S80(No b...
					</h3>
					<p className="text-muted-foreground mb-4">
						4K ColorVu Fixed Bullet Solar Power 4G Network Camera Kit
					</p>
					<div className="flex items-center">
						<input type="checkbox" id="compare1" className="mr-2" />
						<label htmlFor="compare1" className="text-sm">
							Comparar
						</label>
					</div>
				</div>

				<div className="flex-shrink-0 w-64 bg-card p-4 rounded-lg shadow-md">
					<img
						src="https://placehold.co/150x150"
						alt="2MP Web Camera"
						className="mb-4 mx-auto"
					/>
					<h3 className="text-lg font-semibold mb-2">DS-U02P</h3>
					<p className="text-muted-foreground mb-4">2MP Web Camera</p>
					<div className="flex items-center">
						<input type="checkbox" id="compare2" className="mr-2" />
						<label htmlFor="compare2" className="text-sm">
							Comparar
						</label>
					</div>
				</div>

				<div className="flex-shrink-0 w-64 bg-card p-4 rounded-lg shadow-md">
					<img
						src="https://placehold.co/150x150"
						alt="IP Video Intercom Kit"
						className="mb-4 mx-auto"
					/>
					<h3 className="text-lg font-semibold mb-2">DS-KIS604-S(B)</h3>
					<p className="text-muted-foreground mb-4">IP Video Intercom Kit</p>
					<div className="flex items-center">
						<input type="checkbox" id="compare3" className="mr-2" />
						<label htmlFor="compare3" className="text-sm">
							Comparar
						</label>
					</div>
				</div>

				<div className="flex-shrink-0 w-64 bg-card p-4 rounded-lg shadow-md">
					<img
						src="https://placehold.co/150x150"
						alt="4MP DeepinView Moto Varifocal Bullet Camera"
						className="mb-4 mx-auto"
					/>
					<h3 className="text-lg font-semibold mb-2">
						iDS-2CD7A45G0-IZ(H)S(Y)
					</h3>
					<p className="text-muted-foreground mb-4">
						4MP DeepinView Moto Varifocal Bullet Camera
					</p>
					<div className="flex items-center">
						<input type="checkbox" id="compare4" className="mr-2" />
						<label htmlFor="compare4" className="text-sm">
							Comparar
						</label>
					</div>
				</div>
			</div>

			<div className="text-center mt-8">
				<a href="#" className="text-primary hover:underline">
					Ver Todos &rarr;
				</a>
			</div>
		</>
	);
}
