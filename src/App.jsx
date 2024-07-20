import "./App.css";
import Header from "./components/Header";
import HomeBannerCarrousel from "./components/HomeBannerCarrousel";
import Cards from "./components/Cards";
import CardsClientes from "./components/CardsClientes";
import Carrousel2 from "./components/Carrousel2";
import Icons from "./components/Icons";
import CarrouselDestacados from "./components/CarrouselDestacados";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<HomeBannerCarrousel />
			<Cards />
			<CardsClientes />
			<Carrousel2 />
			<Icons
				icons={[
					{img: "/vite.svg", alt: "vite", title: "vite"},
					{img: "/vite.svg", alt: "vite", title: "vite"},
				]}
			/>
			<CarrouselDestacados />
			<Footer />
		</>
	);
}

export default App;
