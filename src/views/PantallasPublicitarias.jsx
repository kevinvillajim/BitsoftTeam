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

export default function PantallasPublicitarias() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Header />
			<BannerS
				img="/publicitariaBanner.jpg"
				position="center"
				height="31rem"
				fixed={true}
			/>
			<div className="py-[2rem]">
				<Title title="PANTALLAS PUBLICITARIAS" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/videowalls.png",
						title: "Video Wall",
						description:
							"Pantalla modular que ofrece una visualización expansiva y de alta resolución, ideal para publicidad, centrales de seguridad y presentaciones impactantes en espacios amplios.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20video%20walls%20que%20vi%20en%20la%20pagina%20web.",
					},
					{
						img: "/totems.png",
						title: "Totems",
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
