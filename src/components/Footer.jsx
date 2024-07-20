export default function Footer() {
	return (
		<>
			<div className="bg-zinc-800 text-zinc-300 p-8">
				<div className="container mx-auto flex flex-wrap justify-between">
					<div className="w-full lg:w-1/4 mb-6 lg:mb-0">
						<img
							src="https://placehold.co/150x50?text=HIKVISION"
							alt="HIKVISION logo"
							className="mb-4"
						/>
					</div>
					<div className="w-full lg:w-1/5 mb-6 lg:mb-0">
						<h3 className="text-lg font-semibold mb-2">Sobre Hikvision</h3>
						<ul>
							<li>
								<a href="#" className="hover:underline">
									Perfil de la empresa
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Informe financiero
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Ciberseguridad
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Sostenibilidad
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Centrados en la calidad
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Contáctanos
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-1/5 mb-6 lg:mb-0">
						<h3 className="text-lg font-semibold mb-2">Noticias</h3>
						<ul>
							<li>
								<a href="#" className="hover:underline">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Más recientes
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Historias de éxito
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Menciones de prensa
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-1/5 mb-6 lg:mb-0">
						<h3 className="text-lg font-semibold mb-2">Eventos</h3>
						<ul>
							<li>
								<a href="#" className="hover:underline">
									Hikvision en vivo
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Lista de eventos
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-1/5 mb-6 lg:mb-0">
						<h3 className="text-lg font-semibold mb-2">Accesos rápidos</h3>
						<ul>
							<li>
								<a href="#" className="hover:underline">
									Tecnologías principales
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Dónde comprar
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Soporte en línea
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Mapa del sitio
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="container mx-auto flex flex-wrap justify-between items-center mt-8">
					<div className="flex space-x-4">
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=📘"
								alt="Facebook"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=🐦"
								alt="Twitter"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=🔗"
								alt="LinkedIn"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=📸"
								alt="Instagram"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=📹"
								alt="YouTube"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=🎵"
								alt="TikTok"
							/>
						</a>
						<a href="#" className="text-zinc-300 hover:text-white">
							<img
								src="https://openui.fly.dev/openui/24x24.svg?text=💬"
								alt="Messenger"
							/>
						</a>
					</div>
					<div className="flex space-x-4">
						<button className="border border-zinc-500 text-zinc-300 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-zinc-700">
							<img
								src="https://openui.fly.dev/openui/16x16.svg?text=🎧"
								alt="Contact icon"
							/>
							<span>Contáctanos</span>
						</button>
						<button className="border border-zinc-500 text-zinc-300 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-zinc-700">
							<img
								src="https://openui.fly.dev/openui/16x16.svg?text=✉️"
								alt="Newsletter icon"
							/>
							<span>Suscripción al newsletter</span>
						</button>
					</div>
				</div>
				<div className="container mx-auto mt-8 border-t border-zinc-700 pt-4 text-center text-sm">
					<p>
						© 2024 Hangzhou Hikvision Digital Technology Co., Ltd. Todos los
						derechos reservados.
					</p>
					<div className="flex justify-center space-x-4 mt-2">
						<a href="#" className="hover:underline">
							Políticas de privacidad
						</a>
						<a href="#" className="hover:underline">
							Políticas de cookies
						</a>
						<a href="#" className="hover:underline">
							Preferencias de cookies
						</a>
						<a href="#" className="hover:underline">
							Términos generales de uso
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
