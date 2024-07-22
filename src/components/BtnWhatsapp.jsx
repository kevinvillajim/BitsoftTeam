import { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function BtnWhatsapp() {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.scrollHeight - 30 * 16; // 20 rem in pixels

      if (scrollPosition >= threshold) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      id="whatsapp-link"
      href="https://api.whatsapp.com/send?phone=+593998592223&text=Hola,%20necesito%20informaci%C3%B3n,%20me%20contacto%20desde%20la%20pagina%20web."
      target="_blank"
      className={isNearFooter ? "hide" : ""}
    >
      <div id="whatsapp-btn">
        <WhatsAppIcon sx={{ width: "45px", height: "45px", color: "#fff" }} />
      </div>
    </a>
  );
}
