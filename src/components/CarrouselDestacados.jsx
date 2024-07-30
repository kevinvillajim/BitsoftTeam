import Button from "./Button";
export default function CarrouselDestacados({destacados, verTodos}) {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto px-8 carrouselDestacadosContainer">
				{destacados.map((destacado, index) => (
					<div className="p-4 rounded-lg border border-1 shadow-lg" key={index}>
						<div className="w-full h-[250px] relative">
							<div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg ">
								{/* bg-gradient-to-br from-gray-500 via-white to-gray-500 */}
								<img
									src="/bgCard.jpg"
									alt="Background"
									className="h-full object-cover img_transparent"
								/>
							</div>
							<img
								src={destacado.img}
								alt={`Producto-${destacado.title}`}
								className="mb-4 object-cover w-full h-full z-1 relative"
							/>
						</div>
						<h3 className="text-lg font-semibold mb-2">{destacado.title}</h3>
						<p className="text-muted-foreground mb-4 h-[8.8rem]">
							{destacado.description}
						</p>
						<Button
							link={destacado.link}
							title="cotizar"
							text="Cotizar"
							dark={true}
						/>
					</div>
				))}
			</div>
			{verTodos ? (
				<div className="text-center mt-8">
					<a href="/productos" className="text-primary hover:underline">
						Ver Todos &rarr;
					</a>
				</div>
			) : (
				""
			)}
		</>
	);
}
