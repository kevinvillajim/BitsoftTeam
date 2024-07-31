import {useState} from "react";
import Button from "./Button";
import Modal from "./Modal";
import Formulario from "./Formulario";

export default function CarrouselDestacados({destacados, verTodos}) {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({title: "", message: ""});

	const handleButtonClick = (title) => {
		setModalContent({
			title,
			message: `Deseo cotizar: ${title} por favor comunicarse conmigo`,
		});
		setShowModal(true);
	};

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto px-8 carrouselDestacadosContainer">
				{destacados.map((destacado, index) => (
					<div className="p-4 rounded-lg border border-1 shadow-lg" key={index}>
						<div className="w-full h-[250px] relative">
							<div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg ">
								<img
									src="/bgCard.jpg"
									alt="Background"
									className="h-full object-cover img_transparent"
								/>
							</div>
							<img
								src={destacado.img}
								alt={`Producto-${destacado.title}`}
								className="mb-4 object-cover w-full h-full z-1 relative"
							/>
						</div>
						<h3 className="text-lg font-semibold mb-2">{destacado.title}</h3>
						<p className="text-muted-foreground mb-4 h-[11rem]">
							{destacado.description}
						</p>
						<Button
							link="#"
							title="cotizar"
							text="Cotizar"
							dark={true}
							onClick={() =>
								handleButtonClick(destacado.title, destacado.description)
							}
						/>
					</div>
				))}
			</div>
			{verTodos ? (
				<div className="text-center mt-8">
					<a href="/productos" className="text-primary hover:underline">
						Ver Todos &rarr;
					</a>
				</div>
			) : (
				""
			)}
			{showModal && (
				<Modal
					setShowModal={setShowModal}
					content={
						<Formulario
							title={modalContent.title}
							message={modalContent.message}
						/>
					}
				/>
			)}
		</>
	);
}
