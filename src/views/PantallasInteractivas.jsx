import {useState} from "react";
import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Modal from "../components/Modal";
import Title from "../components/Title";
import Icons from "../components/Icons";
import Tabs from "../components/Tabs";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function PantallasInteractivas() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Header />
			<BannerS
				img="/pantallasBanner.png"
				position="center"
				height="31rem"
				fixed={true}
			/>
			<div className="py-[2rem]">
				<Title title="PANTALLA INTERACTIVA ONE SCREEN TL7" />
			</div>
			<Icons
				icons={[
					{
						img: "/notas.png",
						description: "Notas",
						title: "Haz anotaciones en tiempo real.",
					},
					{
						img: "/dispositivos.png",
						description: "Dispositivos",
						title: "Conectate a cualquier dispositivo sin cables",
					},
					{
						img: "/sonido.png",
						description: "Sonido",
						title: "Sonido de alta calidad incrustado",
					},
					{
						img: "/proyector.png",
						description: "Proyector",
						title: "Sustituye proyectores y televisores",
					},
				]}
			/>
			<div className="py-[2rem]">
				<Title title="HARDWARE" />
			</div>
			<Tabs
				tabs={[
					{
						id: "tab1",
						title: "Protección y Ciclo de Vida",
						icon: "shield",
						content: (
							<>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Vidrio: </p>
									<span>
										Vidrio templado anti-reflejo y anti huellas con dureza de 7
										Mohs, ancho de 4mm.
									</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">
										Ciclo de vida Util:{" "}
									</p>
									<span>
										100.000 horas de uso continuo {"(11 años y medio)"}
									</span>
								</div>
							</>
						),
					},
					{
						id: "tab2",
						title: "Audio",
						icon: "graphic_eq",
						content: (
							<>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Altavoces: </p>
									<span>x2 salidas estereo de 16W sonido envolvente</span>
								</div>
							</>
						),
					},
					{
						id: "tab3",
						title: "Caracteristicas del panel",
						icon: "tv",
						content: (
							<>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Tecnologia: </p>
									<span>DLED</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Resolución: </p>
									<span>4K UHD (3840 x 2160)</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">
										Angulo de visión:{" "}
									</p>
									<span>178° Izquierdo, derecho, inferior y superior</span>
								</div>
							</>
						),
					},
					{
						id: "tab4",
						title: "Conectividad",
						icon: "sensors",
						content: (
							<>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Sensores: </p>
									<span>1x Sensor de luz para brillo.</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Conectividad: </p>
									<span>Wifi / Bluetooth / Wifi Hotspot.</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Puertos: </p>
									<span>
										HDMI - VGA - USB Touch tipo B - USB Tipo A,C - Entrada y
										salida de audio-Ranura OPS
									</span>
								</div>
							</>
						),
					},
					{
						id: "tab5",
						title: "Procesamiento",
						icon: "memory",
						content: (
							<>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">
										Sistema Operativo:{" "}
									</p>
									<span>Android 11</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">Memoria RAM: </p>
									<span>8 GB RAM</span>
								</div>
								<div className="my-[2rem]">
									<p className="text-[] font-bold mr-[1rem]">
										Almacenamiento:{" "}
									</p>
									<span>64 GB</span>
								</div>
							</>
						),
					},
				]}
			/>
			<div className="bg-gradient-to-tl from-white via-gray-400 to-white]">
				<BannerS
					img="/tl7One.png"
					position="center"
					height="32rem"
					title="El presente y futuro de la Educación"
					textColor="text-color"
					textColor1="text-color1"
					otherContainer="flex"
					otherText="other-text"
					content="Forma parte del 20% de instituciones que se diferencia por la tecnología e inovación, sé el presente de tus alumnos y deja huella en ellos."
					btn={{
						title: "Ver Video",
						dark: true,
						onClick: () => {
							setShowModal(!showModal);
						},
					}}
				/>
			</div>
			{showModal ? (
				<Modal
					setShowModal={setShowModal}
					content={
						<>
							<iframe
								width="760"
								height="515"
								src="https://www.youtube.com/embed/6uaXxwzHPgU?si=GMaphu6c05z1Z8zm"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</>
					}
				/>
			) : (
				""
			)}
			<div className="py-[2rem]">
				<Title title="TAMAÑOS DISPONIBLES" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/tl755.png",
						title: 'Pantalla OneScreen TL7 55"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2055%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/tl765.png",
						title: 'Pantalla OneScreen TL7 65"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2065%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/tl775.png",
						title: 'Pantalla OneScreen TL7 75"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2075%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/tl786.png",
						title: 'Pantalla OneScreen TL7 86"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2086%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/tl798.png",
						title: 'Pantalla OneScreen TL7 98"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2095%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/tl7105.png",
						title: 'Pantalla OneScreen TL7 105"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%20105%22%20que%20vi%20en%20la%20pagina%20web.",
					},
				]}
			/>
			<div className="py-[2rem]">
				<Title title="ACCESORIOS ONE SCREEN" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/camarasOs.png",
						title: "Cámaras con Inteligencia Artificial",
						description:
							"Zoom y enfoque automático de acuerdo al numero de personas en sala. Utiliza giro, inclinación y zoom para seguir y enfocar el presentador mientras se mueven en un cuarto.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20camaras%20OneScreen%20con%20Inteligencia%20artificial.",
					},
					{
						img: "/soportesOs.png",
						title: "Soportes Moviles de Pantallas",
						description:
							"Utiliza tu pantalla OneScreen donde quieras con los robustos y resistentes sopores móviles de la propia marca. disponible para todos los tamaños de pantallas.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20soportes%20moviles%20OneScreen%20que%20vi%20en%20la%20web.",
					},
					{
						img: "/soporteElectrico.png",
						title: "Soporte eléctrico móvil",
						description:
							'Comodidad al alcance de tu mano y tu altura, con nuestro soporte eléctrico cuenta con altura ajustable para pantallas de hasta 105"',
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20soportes%20m%C3%B3viles%20el%C3%A9ctricos%20que%20vi%20en%20la%20web.",
					},
				]}
			/>
			<div id="contacto">
				<Footer />
			</div>
			<BtnWhatsapp />
		</>
	);
}
