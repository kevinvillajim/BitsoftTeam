import PropTypes from "prop-types";

export default function Modal({ setShowModal, content }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
        <div className="bg-white px-[2rem] py-[2rem] rounded-lg relative">
          <div className="w-[100%] text-end">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={() => {
                setShowModal(false);
              }}
            >
              close
            </span>
          </div>
          <div className="h-[100%] w-[100%] flex justify-center items-center">
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
