import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";
import Productos from "./views/Productos";
import PantallasInteractivas from "./views/PantallasInteractivas";
import PantallasPublicitarias from "./views/PantallasPublicitarias";
import Computo from "./views/Computo";
import Seguridad from "./views/Seguridad";
import Infraestructura from "./views/Infraestructura";
import ExitModal from "./components/ExitModal";
import {useState, useEffect} from "react";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [canShowModal, setCanShowModal] = useState(true);
	const time = 180000;

	useEffect(() => {
		const modalShown = localStorage.getItem("ExitModalShown");
		if (modalShown) {
			setCanShowModal(false);
			setTimeout(() => {
				setCanShowModal(true);
				localStorage.removeItem("ExitModalShown");
			}, time);
		}

		const handleMouseLeave = (e) => {
			if (e.clientY <= 0 && canShowModal) {
				setIsModalOpen(true);
				setCanShowModal(false);
				localStorage.setItem("ExitModalShown", "true");
			}
		};

		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [canShowModal]);

	const closeModal = () => {
		setIsModalOpen(false);

		setTimeout(() => {
			setCanShowModal(true);
			localStorage.removeItem("ExitModalShown");
		}, time);
	};

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/productos" element={<Productos />} />
					<Route
						path="/productos/pantallas-interactivas"
						element={<PantallasInteractivas />}
					/>
					<Route
						path="/productos/pantallas-publicitarias"
						element={<PantallasPublicitarias />}
					/>
					<Route path="/productos/computo" element={<Computo />} />
					<Route path="/productos/seguridad" element={<Seguridad />} />
					<Route
						path="/productos/infraestructura"
						element={<Infraestructura />}
					/>
				</Routes>
			</Router>
			<ExitModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
}

export default App;
