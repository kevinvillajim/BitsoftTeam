import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Title from "../components/Title";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function Infraestructura() {
	return (
		<>
			<Header />
			<BannerS
				img="/servidores2.jpg"
				position="center"
				height="31rem"
				fixed={true}
			/>
			<div className="py-[2rem]">
				<Title title="REDES" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/router.png",
						title: "Routers",
						description: "Dispositivos de red para conectar tus equipos.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Routers.",
					},
					{
						img: "/ap.png",
						title: "Access Points",
						description: "Puntos de acceso para extender tu red.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Access%20Points.",
					},
					{
						img: "/switch.png",
						title: "Switchs",
						description: "Dispositivos para gestionar conexiones de red.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Switchs.",
					},
					{
						img: "/cable.png",
						title: "Cables",
						description: "Cables para conexiones de red e infraestructura.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Cables.",
					},
					{
						img: "/adaptadoresred.png",
						title: "Adaptadores",
						description:
							"Adaptadores para diversas necesidades de conectividad.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Adaptadores.",
					},
					{
						img: "/antena.png",
						title: "Antenas",
						description: "Antenas para mejorar la recepción de señal.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Antenas.",
					},
				]}
			/>
			<div className="py-[2rem]">
				<Title title="INFRAESTRUCTURA TI" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/torre.png",
						title: "Servidores Tipo Torre",
						description: "Servidores de torre para soluciones empresariales.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Servidores%20Tipo%20Torre.",
					},
					{
						img: "/rack.png",
						title: "Servidores Tipo Rack",
						description:
							"Servidores rack para optimizar el espacio a nivel empresarial.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Servidores%20Tipo%20Rack.",
					},
					{
						img: "/nas.png",
						title: "Almacenamiento NAS",
						description:
							"Sistemas NAS para almacenamiento de datos ultrarápido.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Almacenamiento%20NAS.",
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
