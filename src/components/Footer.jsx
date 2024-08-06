import Social from "./Social";
import ButtonDemo from "./ButtonDemo.jsx";

export default function Footer() {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-300 py-8 px-[5rem] mt-[3rem]">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 flex justify-between">
            <img
              src="/logo.png"
              alt="Logo"
              className="mb-4"
            />
          </div>
          <div className="justify-evenly flex flex-col items-center mt-8">
            <div className="flex gap-4 socialContainer">
              <Social
                link="https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20me%20contacto%20desde%20la%20pagina%20web%20de%20Bistoft%20Team."
                img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/whatsapp.png"
              />
              <Social
                link="https://www.instagram.com/bitsofteam"
                img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/instagram.png"
              />
              <Social
                link="https://www.facebook.com/bitsofteam?mibextid=ZbWKwL"
                img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/facebook.png"
              />
              <Social
                link="https://github.com/kevinvillajim/"
                img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/GH.svg"
              />
              <Social
                link="mailto:jose.vernaza@bitsofteam.com"
                img="https://raw.githubusercontent.com/kevinvillajim/Portfolio/main/src/assets/icons/email.png"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between menuContainer">
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <a href="/">
              <h3 className="text-lg font-semibold mb-2 hover:underline">
                Inicio
              </h3>
            </a>
            <ul>
              <li>
                <a
                  href="/#clientes"
                  className="hover:underline"
                >
                  Nuestros Clientes
                </a>
              </li>
              <li>
                <a
                  href="/#por-que"
                  className="hover:underline"
                >
                  Por que Nosotros?
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  className="hover:underline"
                >
                  Nuestros Servicios
                </a>
              </li>

              <li>
                <a
                  href="/#destacados"
                  className="hover:underline"
                >
                  Productos más Vendidos
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <a href="/nosotros">
              <h3 className="text-lg font-semibold mb-2 hover:underline">
                Nosotros
              </h3>
            </a>
            <ul>
              <li>
                <a
                  href="/nosotros#equipo"
                  className="hover:underline"
                >
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a
                  href="/nosotros/#empresa"
                  className="hover:underline"
                >
                  Perfil de la empresa
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20me%20contacto%20desde%20la%20pagina%20web%20de%20Bistoft%20Team."
                  className="hover:underline"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <a href="/productos">
              <h3 className="text-lg font-semibold mb-2 hover:underline">
                Productos
              </h3>
            </a>
            <ul>
              <li>
                <a
                  href="/productos/pantallas-interactivas"
                  className="hover:underline"
                >
                  Pantallas One Screen
                </a>
              </li>
              <li>
                <a
                  href="/productos/pantallas-publicitarias"
                  className="hover:underline"
                >
                  Pantallas Publicitarias
                </a>
              </li>
              <li>
                <a
                  href="/productos/computo"
                  className="hover:underline"
                >
                  Computo y Accesorios
                </a>
              </li>
              <li>
                <a
                  href="/productos/seguridad"
                  className="hover:underline"
                >
                  Seguridad
                </a>
              </li>
              <li>
                <a
                  href="/productos/infraestructura"
                  className="hover:underline"
                >
                  Infraestructura TI
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <ButtonDemo />
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-zinc-700 pt-4 text-center text-sm">
          <p>© 2024 BitsoftTeam, Cia. Ltda. Todos los derechos reservados.</p>
          <p className="mt-[1rem]">
            Website by{" "}
            <a
              href="https://kevinvillajim.github.io/Portfolio/"
              className="text-blue-500 hover:underline"
            >
              kevinvillajim
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
