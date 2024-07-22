import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Title from "../components/Title";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function Computo() {
  return (
    <>
      <Header />
      <BannerS
        img="/computo2.jpg"
        position="center"
        height="31rem"
        fixed={true}
      />
      <div className="py-[2rem]">
        <Title title="COMPUTO Y ACCESORIOS" />
      </div>
      <CarrouselDestacados
        destacados={[
          {
            img: "/pcs.png",
            title: "Monitores y PCs",
            description:
              "Pantallas y computadoras de alto rendimiento para todas tus necesidades.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20los%20Monitores%20y%20PCs%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/aio.png",
            title: "All in One",
            description:
              "Equipos todo en uno con pantallas interactivas y potentes prestaciones.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20las%20computadoras%20All%20in%20One%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/laptop.png",
            title: "Laptops",
            description:
              "Laptops de última generación para tus aplicaciones y plataformas favoritas.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Laptops%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/mouse.png",
            title: "Teclados y Mouse",
            description:
              "Periféricos esenciales para una experiencia de uso cómoda y eficiente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Teclados%20y%20Mouse%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/cables.png",
            title: "Cables y Adaptadores",
            description:
              "Accesorios para conectividad y adaptadores para todas tus necesidades.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Cables%20y%20Adaptadores%20que%20vi%20en%20la%20web.",
          },
        ]}
      />
      <div className="py-[2rem]">
        <Title title="ALMACENAMIENTO Y AUDIO" />
      </div>
      <CarrouselDestacados
        destacados={[
          {
            img: "/hdext.png",
            title: "Discos Externos",
            description:
              "Almacenamiento externo confiable para todos tus datos.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Discos%20Externos%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/sd.png",
            title: "Tarjetas de memoria",
            description: "Tarjetas de memoria de alta capacidad y velocidad.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Tarjetas%20de%20memoria%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/pendrive.png",
            title: "Pen Drives",
            description:
              "Pen drives portátiles para almacenar y transferir datos fácilmente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Pen%20Drives%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/bsonido.png",
            title: "Barras de Sonido",
            description:
              "Barras de sonido para una experiencia de audio envolvente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Barras%20de%20Sonido%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/parlantes.png",
            title: "Parlantes",
            description:
              "Parlantes de alta calidad para un sonido nítido y potente.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Parlantes%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/audifonos.png",
            title: "Audifonos",
            description: "Audífonos cómodos y con gran calidad de sonido.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Audifonos%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/mic.png",
            title: "Micrófonos",
            description:
              "Micrófonos para grabación y comunicación con claridad.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Micrófonos%20que%20vi%20en%20la%20web.",
          },
          {
            img: "/audifonosinalam.png",
            title: "Audifonos Inalámbricos",
            description:
              "Audífonos inalámbricos para mayor libertad de movimiento.",
            link: "https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20deseo%20cotizar%20Audifonos%20Inal%C3%A1mbricos%20que%20vi%20en%20la%20web.",
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
