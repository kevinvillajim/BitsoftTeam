import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect, Suspense, lazy} from "react";
import ExitModal from "./components/ExitModal";

// Lazy loading de componentes
const Home = lazy(() => import("./views/Home"));
const Nosotros = lazy(() => import("./views/Nosotros"));
const Productos = lazy(() => import("./views/Productos"));
const PantallasInteractivas = lazy(() =>
	import("./views/PantallasInteractivas")
);
const PantallasPublicitarias = lazy(() =>
	import("./views/PantallasPublicitarias")
);
const Computo = lazy(() => import("./views/Computo"));
const Seguridad = lazy(() => import("./views/Seguridad"));
const Infraestructura = lazy(() => import("./views/Infraestructura"));

// Componente de loading
const LoadingSpinner = () => (
	<div className="flex justify-center items-center min-h-screen">
		<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#d61631]"></div>
	</div>
);

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
				<Suspense fallback={<LoadingSpinner />}>
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
				</Suspense>
			</Router>
			<ExitModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
}

export default App;
