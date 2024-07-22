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
            description:
              "Almacenamiento externo confiable para todos tus datos.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Discos%20Externos%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/ap.png",
            title: "Access Points",
            description: "Tarjetas de memoria de alta capacidad y velocidad.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Tarjetas%20de%20memoria%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/switch.png",
            title: "Switchs",
            description:
              "Pen drives portátiles para almacenar y transferir datos fácilmente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Pen%20Drives%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/cable.png",
            title: "Cables",
            description:
              "Barras de sonido para una experiencia de audio envolvente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Barras%20de%20Sonido%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/adaptadoresred.png",
            title: "Adaptadores",
            description:
              "Parlantes de alta calidad para un sonido nítido y potente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Parlantes%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/antena.png",
            title: "Antenas",
            description: "Audífonos cómodos y con gran calidad de sonido.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Audifonos%20que%20vi%20en%20la%20web.",
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
            description:
              "Pantallas y computadoras de alto rendimiento para todas tus necesidades.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20Monitores%20y%20PCs%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/rack.png",
            title: "Servidores Tipo Rack",
            description:
              "Equipos todo en uno con pantallas interactivas y potentes prestaciones.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20computadoras%20All%20in%20One%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/nas.png",
            title: "Almacenamiento NAS",
            description:
              "Laptops de última generación para tus aplicaciones y plataformas favoritas.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Laptops%20que%20vi%20en%20la%20web.",
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
