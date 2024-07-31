import {useState} from "react";
import Modal from "./Modal";
import Formulario from "./Formulario";

export default function ButtonDemo({dark}) {
	const [showModal, setShowModal] = useState(false);
	const handleButtonClick = () => {
		setShowModal(true);
	};

	return (
		<>
			<div onClick={handleButtonClick}>
				<a
					title="Demo"
					className={`text-center ${
						dark === true ? "cta-button2-dark" : "cta-button2"
					}`}
				>
					Solicitar una Demostración
				</a>
			</div>
			{showModal && (
				<Modal
					setShowModal={setShowModal}
					content={
						<Formulario
							title="Solicitar una Demostración"
							message="Deseo solicitar una demostración, por favor contactarme"
						/>
					}
				/>
			)}
		</>
	);
}
