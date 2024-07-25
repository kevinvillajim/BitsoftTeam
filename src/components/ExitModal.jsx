import Modal from "react-modal";
import Button from "./Button";

Modal.setAppElement("#root");

const ExitModal = ({isModalOpen, closeModal}) => {
	return (
		<div>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Exit Modal"
				style={{
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo negro transparente
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						color: "rgba(0, 0, 0, 0.7)",
						width: "60%", // Ajustar ancho del modal
						height: "auto", // Altura automática
						padding: "2rem",
						paddingBottom: "4rem",
					},
				}}
			>
				<div className="">
					<div className="flex justify-end mb-[1rem]">
						<span
							className="material-symbols-outlined cursor-pointer"
							onClick={closeModal}
						>
							close
						</span>
					</div>
					<div className="flex justify-between">
						<div className="w-[45%]">
							<h2 className="text-[35px]">¿Ya te vas?</h2>
							<p>
								Antes de que te vayas, nos gustaría saber si hay algo más en lo
								que podamos ayudarte.
							</p>
							<p className="my-[2rem]">
								Obtén un cupón de <b>5% de descuento</b> por tu compra
							</p>
							<div className="flex justify-between">
								<Button
									link="https://api.whatsapp.com/send?phone=593998592223&text=Hola%2C%20Deseo%20reclamar%20mi%20cup%C3%B3n%20de%205%25%20descuento%20%F0%9F%8E%AB%F0%9F%92%B8"
									title="whatsappDesc"
									text="cupón de descuento"
									dark={true}
								/>
							</div>
						</div>
						<div className="w-[45%] ">
							<img
								src="/teVas.jpg"
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ExitModal;
