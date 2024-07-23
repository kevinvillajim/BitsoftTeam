import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Title from "../components/Title";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function Seguridad() {
	return (
		<>
			<Header />
			<BannerS img="/cctv.webp" position="center" height="31rem" fixed={true} />
			<div className="py-[2rem]">
				<Title title="SEGURIDAD ELECTRÓNICA" />
			</div>
			<CarrouselDestacados
				destacados={[
					{
						img: "/camaras.png",
						title: "Cámaras de seguridad",
						description:
							"Sistemas de video vigilancia, CCTV y cámaras inalámbricas  para tu seguridad.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Cámaras%20de%20seguridad.",
					},
					{
						img: "/biometrico.png",
						title: "Control de Accesos y Biométricos",
						description:
							"Dispositivos para control de acceso mediante biometría y reconocimiento facial.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Control%20de%20Accesos%20y%20Biométricos.",
					},
					{
						img: "/videoportero.png",
						title: "Video porteros",
						description:
							"Sistemas de intercomunicación para mayor seguridad y gestión de ingresos.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Video%20porteros.",
					},
					{
						img: "/alarma.png",
						title: "Alarmas",
						description:
							"Sistemas de alarma intrusiva y de incendios, alámbricas e inalambricas.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Alarmas.",
					},
					{
						img: "/alexa.png",
						title: "Domótica",
						description:
							"Tecnología inteligente y automatización para tu hogar.",
						link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20vengo%20desde%20la%20página%20web%20y%20deseo%20cotizar%20Domótica.",
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
