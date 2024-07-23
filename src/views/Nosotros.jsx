import Header from "../components/Header";
import Title from "../components/Title";
import BannerS from "../components/BannerS";
import Team from "../components/Team";
import Historia from "../components/Historia";
import Footer from "../components/Footer";
import BtnWhatsapp from "../components/BtnWhatsapp";

export default function Nosotros() {
	return (
		<>
			<Header />
			<BannerS
				img="/teamBanner.jpg"
				position="center"
				height="31rem"
				fixed={true}
			/>
			<div id="equipo">
				<div className="my-[2rem]">
					<Title title="EQUIPO BITSOFT TEAM" />
				</div>
				<Team
					title="Conoce el Equipo"
					subtitle="Somos personas comprometidas con la calidad y el servicio de excelencia"
					text="qwoeqwpoeiwqpoeipwqoiepoqwiepoqiwepoiqwpoeqweqwewqeqweqweqweqw qweqwe qwe qweq we qwe qw"
					img1="https://raw.githubusercontent.com/kevinvillajim/edieSite/main/public/person1.png"
					img2="https://raw.githubusercontent.com/kevinvillajim/edieSite/main/public/person2.png"
					img3="https://raw.githubusercontent.com/kevinvillajim/edieSite/main/public/person3.png"
				/>
			</div>
			<div id="empresa">
				<div className="my-[2rem]">
					<Title title="HISTORIA DE BITSOFT TEAM" />
				</div>
				<Historia
					title=""
					cards={[
						{
							img: "/empresa2.jpg",
							subTitle: "Nombrado Partner de IBM",
							title: "2020",
							type: "down",
						},
						{
							img: "/empresa1.jpg",
							subTitle: "Inicio de Operaciones como una empresa de tecnología",
							title: "2019",
							type: "up",
						},
						{
							img: "/empresa4.jpg",
							subTitle: "Establecida como empresa del año...",
							title: "2023",

							type: "down",
						},
						{
							img: "/empresa3.jpg",
							subTitle:
								"Nombrado Único distribuidor autorizado de One Screen en Ecuador",
							title: "2021",
							type: "up",
						},
					]}
				/>
			</div>
			<div id="contacto" className="mt-[5rem]">
				<Footer />
			</div>
			<BtnWhatsapp />
		</>
	);
}
