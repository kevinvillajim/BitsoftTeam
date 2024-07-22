import Header from "../components/Header";
import HomeBannerCarrousel from "../components/HomeBannerCarrousel";
import Title from "../components/Title.jsx";
import Cards from "../components/Cards";
import CardsClientes from "../components/CardsClientes";
import Icons from "../components/Icons";
import CarrouselDestacados from "../components/CarrouselDestacados";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

function Home() {
  return (
    <>
      <Header />
      <HomeBannerCarrousel
        carrousel={[
          {
            title: "PANTALLAS INTERACTIVAS",
            text: "En nuestros días la técnología es parte indispensable de la educación, las pantallas interactivas no son solo dispositivos; son portales hacia un conocimiento más profundo y una comprensión más amplia del conocimiento",
            link: "/pantallas-interactivas",
            textbtn: "Aprende más",
            img: "/pantallasHome.png",
          },
          {
            title: "CONOCE A NUESTRO EQUIPO",
            text: "En el corazón de nuestra empresa, más allá de los circuitos, las pantallas y la técnología, se encuentra un equipo apasionado y comprometido en tus necesidades.",
            link: "/nosotros",
            textbtn: "Conócenos",
            img: "/team.png",
          },
        ]}
      />
      <div className="my-[2rem]">
        <div id="clientes">
          <Title title="Nuestros Clientes" />
        </div>
      </div>
      <CardsClientes
        cardsClientes={[
          { title: "Toyota" },
          { title: "Grupo Bimbo" },
          { title: "Cruz Roja Ecuatoriana" },
          { title: "Escuela Politécnica Nacional" },
          { title: "Metropolitan Touring" },
          { title: "Alcaldía de Guayaquil" },
          { title: "Alcaldía de Otavalo" },
          { title: "Maquita Cushunchic" },
          { title: "FAE" },
          { title: "La Salle" },
          { title: "Espol" },
          { title: "Secretaría de Planificación y Desarrollo" },
          { title: "Instituto Cordillera" },
          { title: "Danec" },
          { title: "Universidad de Cuenca" },
          { title: "Universidad Estatal del Carchi" },
          { title: "Instituto ITECSUR" },
          { title: "Cablecom" },
          { title: "Instituto Abdón Claderón" },
          { title: "Liceo de Ciencias y Artes" },
          { title: "Corporación Eléctrica del Ecuador" },
          { title: "Academia Naval de Guayaquil" },
          { title: "AFK Constructores" },
          { title: "Sweaden Seguros" },
          { title: "Instituto Superior La Maná" },
          { title: "Espae - Espol" },
          { title: "Unidad Educativa Monte Tabor Nazaret" },
          { title: "Gobierno Municipal Chordeleg" },
          { title: "Garabatos - Espititu Santo" },
          { title: "Centro de Estudios Espitiu Santo" },
          { title: "Ortega y Gasset" },
          { title: "Fundación Turismo de Cuenca" },
          { title: "Instituto Superior Sucre" },
          { title: "Unidad Educativa Torremar" },
          { title: "Eight Academy" },
          { title: "Universidad de Postgrado del Estado" },
        ]}
      />
      <div
        className="my-[2rem]"
        id="por-que"
      >
        <Title title="Por que Bitsoft?" />
      </div>
      <Icons
        icons={[
          {
            img: "/os.png",
            description: "Representantes",
            title: "Representantes One Screen",
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
      <div
        className="my-[2rem]"
        id="servicios"
      >
        <Title title="Nuestros Servicios" />
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

export default Home;
