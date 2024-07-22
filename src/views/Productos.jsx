import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Title from "../components/Title";
import Cards from "../components/Cards";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function Productos() {
  return (
    <>
      <Header />
      <BannerS
        img="/tecnology.jpeg"
        title="Somos Líderes en el Mercado"
        content="Manejamos los mejores precios del pais por que somos representantes directos de One Screen"
        height="38rem"
        position="center"
      />
      <div className="my-[2rem]">
        <Title title="Productos" />
      </div>
      <Cards
        cards={[
          {
            img: "/pantallasInteractivas.webp",
            alt: "PantallasInteractivas",
            title: "PANTALLAS INTERACTIVAS",
            description:
              "El futuro al alcance de tus dedos!,  Con un simple gesto, desbloqueas mundos digitales, permitete conocer el futuro en la educación, salas de reuniones y presentaciones con las pantallas mas sólidas del mercado.",
            link: "/productos/pantallas-interactivas",
            btnText: "Ver Mas...",
          },
          {
            img: "/computo.jpg",
            alt: "computo",
            title: "COMPUTO Y ACCESORIOS",
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
      <div
        className="my-[2rem]"
        id="destacados"
      >
        <Title title="Productos Destacados" />
      </div>
      <CarrouselDestacados
        destacados={[
          {
            img: "/tl7.png",
            title: 'Pantalla OneScreen TL7 65"',
            description:
              "Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
            link: "#",
          },
          {
            img: "/tl7.png",
            title: 'Pantalla OneScreen TL7 65"',
            description:
              "Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
            link: "#",
          },
          {
            img: "/tl7.png",
            title: 'Pantalla OneScreen TL7 65"',
            description:
              "Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
            link: "#",
          },
          {
            img: "/tl7.png",
            title: 'Pantalla OneScreen TL7 65"',
            description:
              "Tus aplicaciones y plataformas favoritas en una potente pantalla interactiva que te permite ejecutar múltiples aplicaciones, transmitir, presentar y compartir todo a la vez, sin ningún retraso.",
            link: "#",
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
