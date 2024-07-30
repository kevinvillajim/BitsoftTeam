import PropTypes from "prop-types";

export default function Modal({setShowModal, content}) {
	return (
		<>
			<div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
				<div className="bg-white px-4 py-4 md:px-8 md:py-8 rounded-lg relative max-w-full md:max-w-3xl">
					<div className="w-full text-end">
						<span
							className="material-symbols-outlined cursor-pointer"
							onClick={() => {
								setShowModal(false);
							}}
						>
							close
						</span>
					</div>
					<div className="h-full w-full flex justify-center items-center">
						{content}
					</div>
				</div>
			</div>
		</>
	);
}

Modal.propTypes = {
	setShowModal: PropTypes.func.isRequired,
	content: PropTypes.node.isRequired,
};
