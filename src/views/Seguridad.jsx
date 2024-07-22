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
      <BannerS
        img="/cctv.webp"
        position="center"
        height="31rem"
        fixed={true}
      />
      <div className="py-[2rem]">
        <Title title="SEGURIDAD ELECTRÓNICA" />
      </div>
      <CarrouselDestacados
        destacados={[
          {
            img: "/camaras.png",
            title: "Cámaras de seguridad",
            description:
              "Pantallas y computadoras de alto rendimiento para todas tus necesidades.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20Monitores%20y%20PCs%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/biometrico.png",
            title: "Control de Accesos y Biométricos",
            description:
              "Equipos todo en uno con pantallas interactivas y potentes prestaciones.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20computadoras%20All%20in%20One%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/videoportero.png",
            title: "Video porteros",
            description:
              "Laptops de última generación para tus aplicaciones y plataformas favoritas.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Laptops%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/alarma.png",
            title: "Alarmas",
            description:
              "Periféricos esenciales para una experiencia de uso cómoda y eficiente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Teclados%20y%20Mouse%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/alexa.png",
            title: "Domótica",
            description:
              "Accesorios para conectividad y adaptadores para todas tus necesidades.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Cables%20y%20Adaptadores%20que%20vi%20en%20la%20web.",
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
