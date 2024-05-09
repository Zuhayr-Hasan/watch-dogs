import { useState } from "react";
import Header from "../components/Header/Header";
import CustomModal from "../Modals/Modal";
import Modal from "react-modal";
import Logo from "../assets/home-bg-logo.png";
import "../App.css";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Set the element that the modal should be attached to
  Modal.setAppElement("#root");

  return (
    <div className="bg-primary h-screen">
      <Header />
      <div className="relative h-[79.1vh]">
        <h1 className="font-chakra font-extrabold mt-12 text-center text-5xl lg:text-7xl text-[#fff] animate-fadeInUp">
          <span className="text-gradient">WATCH</span>DOGS
        </h1>
        <h3 className="mt-3 text-xl text-center text-[#fff] z-100">
          We know what you do in the dark..
        </h3>
        <div className="relative border-[1px] rounded-lg mt-[150px] flex justify-center mx-[100px] shadow-custom">
          <img
            className="hidden lg:block h-[270px] absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={Logo}
            alt="home-bg-logo"
          />
          <input
            className="rounded-lg w-full h-[45px] px-5 bg-primary z-10"
            type="text"
            placeholder="Type in ETH Address.."
            style={{
              borderRight: "1px solid #eee",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
          <button onClick={openModal} className="text-[#fff] px-10">
            Generate
          </button>
          <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
}
