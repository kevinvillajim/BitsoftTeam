import Header from "../components/Header";
import HomeBannerCarrousel from "../components/HomeBannerCarrousel";
import Title from "../components/Title.jsx";
import Cards from "../components/Cards";
import CardsClientes from "../components/CardsClientes";
import Icons from "../components/Icons";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";
import video2 from "/public/video2.mp4";

function Home() {
	return (
		<>
			<Header />
			<HomeBannerCarrousel
				carrousel={[
					{
						title: "PANTALLAS INTERACTIVAS",
						text: "En nuestros días la técnología es parte indispensable de la educación, las pantallas interactivas no son solo dispositivos; son portales hacia un conocimiento más profundo y una comprensión más amplia del conocimiento",
						link: "/productos/pantallas-interactivas",
						textbtn: "Aprende más",
						img: "/pantallasHome.png",
					},
					{
						title: "CONOCE A NUESTRO EQUIPO",
						text: "En el corazón de nuestra empresa, más allá de los circuitos, las pantallas y la técnología, se encuentra un equipo apasionado y comprometido con tus necesidades.",
						link: "/nosotros",
						textbtn: "Conócenos",
						img: "/team.png",
					},
					{
						title: "MANTENTE SEGURO",
						text: "La seguridad es indispensable para la tranquilidad, aprende mas sobre los equipos de monitoreo para que puedas tener Tranquilidad Asegurada en este mundo de caótico.",
						link: "/productos/seguridad",
						textbtn: "Aprende más",
						img: "/camBanner.png",
					},
					{
						video: true,
						fondoVideo: video2,
					},
				]}
			/>
			<div className="my-[2rem]">
				<div id="clientes">
					<Title title="NUESTROS CLIENTES" />
				</div>
			</div>
			<CardsClientes
				cardsClientes={[
					{title: "Toyota"},
					{title: "Grupo Bimbo"},
					{title: "Cruz Roja Ecuatoriana"},
					{title: "Escuela Politécnica Nacional"},
					{title: "Metropolitan Touring"},
					{title: "Alcaldía de Guayaquil"},
					{title: "Alcaldía de Otavalo"},
					{title: "Maquita Cushunchic"},
					{title: "FAE"},
					{title: "La Salle"},
					{title: "Espol"},
					{title: "Secretaría de Planificación y Desarrollo"},
					{title: "Instituto Cordillera"},
					{title: "Danec"},
					{title: "Universidad de Cuenca"},
					{title: "Universidad Estatal del Carchi"},
					{title: "Instituto ITECSUR"},
					{title: "Cablecom"},
					{title: "Instituto Abdón Claderón"},
					{title: "Liceo de Ciencias y Artes"},
					{title: "Corporación Eléctrica del Ecuador"},
					{title: "Academia Naval de Guayaquil"},
					{title: "AFK Constructores"},
					{title: "Sweaden Seguros"},
					{title: "Instituto Superior La Maná"},
					{title: "Espae - Espol"},
					{title: "Unidad Educativa Monte Tabor Nazaret"},
					{title: "Gobierno Municipal Chordeleg"},
					{title: "Garabatos - Espititu Santo"},
					{title: "Centro de Estudios Espitiu Santo"},
					{title: "Ortega y Gasset"},
					{title: "Fundación Turismo de Cuenca"},
					{title: "Instituto Superior Sucre"},
					{title: "Unidad Educativa Torremar"},
					{title: "Eight Academy"},
					{title: "Universidad de Postgrado del Estado"},
				]}
			/>
			<div className="my-[2rem]" id="por-que">
				<Title title="POR QUE BITSOFT?" />
			</div>
			<Icons
				icons={[
					{
						img: "/os.png",
						description: "Representantes",
						title: "Mayoristas OneScreen",
					},
					{
						img: "/exp.png",
						description: "Experiencia",
						title: "Experiencia Comprobada",
					},
					{
						img: "/luz.png",
						description: "Experiencia",
						title: "Inovación",
					},
				]}
			/>
			<div className="my-[2rem]" id="servicios">
				<Title title="NUESTROS SERVICIOS" />
			</div>
			<Cards
				cards={[
					{
						img: "/pantallasInteractivas.webp",
						alt: "PantallasInteractivas",
						title: "PANTALLAS INTERACTIVAS",
						description:
							"El futuro al alcance de tus dedos con un simple gesto, desbloquea mundos digitales. Permitete conocer el futuro en la educación, salas de reuniones y presentaciones con las pantallas mas sólidas del mercado.",
						link: "/productos/pantallas-interactivas",
						btnText: "Ver Mas...",
					},
					{
						img: "/computo.jpg",
						alt: "computo",
						title: "CÓMPUTO Y ACCESORIOS",
						description:
							"Explora el poder de la tecnología con nuestros equipos de cómputo y accesorios. Optimiza tu productividad y potencia tu creatividad con dispositivos diseñados para ofrecer rendimiento superior.",
						link: "/productos/computo",
						btnText: "Ver Mas...",
					},
					{
						img: "/seguridad.jpg",
						alt: "seguridad",
						title: "SEGURIDAD",
						description:
							"Protege lo que más valoras con nuestras avanzadas soluciones de seguridad. Implementa sistemas de cámaras de última generación, controles de acceso biométricos y videoporteros inteligentes que garantizan la máxima protección.",
						link: "/productos/seguridad",
						btnText: "Ver Mas...",
					},
					{
						img: "/servidores.webp",
						alt: "InfraestructuraTI",
						title: "INFRAESTRUCTURA TI",
						description:
							"Fortalece el núcleo de tu empresa con una infraestructura TI robusta y eficiente. Nuestros servidores y soluciones de redes están diseñados para ofrecer un rendimiento inigualable y una fiabilidad constante.",
						link: "/productos/infraestructura",
						btnText: "Ver Mas...",
					},
				]}
			/>
			<div className="my-[2rem]" id="destacados">
				<Title title="PRODUCTOS DESTACADOS" />
			</div>
			<CarrouselDestacados
				verTodos={true}
				destacados={[
					{
						img: "/tl765.png",
						title: 'Pantalla OneScreen TL7 65"',
						description:
							"Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20pantallas%20interactivas%20de%2065%22%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/soportesOs.png",
						title: "Soportes Móviles de Pantallas",
						description:
							"Utiliza tu pantalla OneScreen donde quieras con los robustos y resistentes sopores móviles de la propia marca. disponible para todos los tamaños de pantallas. Dos modelos a escojer.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20soportes%20moviles%20OneScreen%20que%20vi%20en%20la%20web.",
					},
					{
						img: "/videowalls.png",
						title: "Video Wall",
						description:
							"Pantalla modular que ofrece una visualización expansiva y de alta resolución, ideal para publicidad, centrales de seguridad y presentaciones impactantes en espacios amplios.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20video%20walls%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/totems.png",
						title: "Tótems",
						description:
							"Pantallas verticales interactivas diseñadas para captar la atención con contenido dinámico y versátil, perfectas para entornos comerciales y de información.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20el%20totem%20que%20vi%20en%20la%20pagina%20web.",
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

export default Home;
