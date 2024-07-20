export default function HomeBannerCarrousel() {
	return (
		<>
			<section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
				<div className="container mx-auto flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 text-center md:text-left">
						<img
							src="https://placehold.co/150x50?text=Bitsoft"
							alt="Bitsoft Logo"
							className="mx-auto md:mx-0 mb-4"
						/>
						<h1 className="text-4xl font-bold mb-4">
							REUNIONES. STREAMING. CONTROL.
						</h1>
						<p className="mb-8">
							Presentamos MX Brio. Disfruta de video ultra HD 4K nítido con
							nuestra cámara web más avanzada hasta la fecha.
						</p>
						<div className="flex justify-center md:justify-start space-x-4">
							<button className="bg-white text-zinc-800 px-4 py-2 rounded-full">
								MÁS INFORMACIÓN
							</button>
							<button className="bg-white text-zinc-800 px-4 py-2 rounded-full">
								DESCUBRIR AHORA
							</button>
						</div>
					</div>
					<div className="md:w-1/2 mt-8 md:mt-0">
						<img
							src="https://placehold.co/600x400?text=Product+Image"
							alt="Product Image"
							className="mx-auto"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
