// import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "0",
    backgroundColor: "#F8F8F8",
    border: "none",
    maxWidth: "450px",
    width: "90%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    background: "red",
  },
  overlay: {
    zIndex: 10,
  },
};

function CustomModal({ modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Watch Dogs Modal"
    >
      {/* Modal content */}
      <div className="z-10 space-y-3">
        {/* Image at the top */}
        <img
          src="src/assets/modal-card-image.png"
          alt="Top Image"
          className="border-2 w-full h-40 object-cover"
        />

        {/* Heading */}
        <h2 className="pl-10 text-2xl font-semibold text-gray-800">
          Welcome to WatchDogs
        </h2>

        {/* Sub-heading */}
        <h3 className="pl-10 text-md text-gray-700">
          Meet your creative copilot.
        </h3>

        {/* Bullet Points */}
        <p className="pl-10 font-medium text-gray-600">
          Search and learn with WatchDogs to:
        </p>
        <ul className="px-12 list-disc text-sm list-inside text-gray-600">
          <li>
            Search any wallet addresses on the Ethereum blockchain and
            understand their NFT activity.
          </li>
          <li className="mt-2">
            Create watchlists, track wallet addresses and get notified when
            trades happen.
          </li>
          <li className="mt-2">
            Export the wallet data to build your own analysis.
          </li>
        </ul>

        {/* Continue Button */}
        <button
          className="px-10 w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition duration-300 ease-in-out"
          onClick={closeModal} // Assuming you want to close the modal on button click
        >
          Continue
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 px-10 pb-5">
          By clicking ‘Continue’, you agree to our terms and content policy.
        </p>
      </div>
    </Modal>
  );
}

export default CustomModal;
