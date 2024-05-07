import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router";

function ResponsiveButton({ onClose }) {
  const navigate = useNavigate();

  const handleMyProfile = () => {
    navigate("/Signup");
    onClose(); // Close menu after navigation
  };

  const handleWatchDogs = () => {
    navigate("/dashboard");
    onClose(); // Close menu after navigation
  };

  return (
    <div className="relative h-screen w-screen bg-primary">
      <RxCrossCircled
        className="cursor-pointer w-10 h-10 absolute top-10 right-10"
        style={{ color: "#C553ED" }}
        onClick={onClose} // Close menu on click
      />
      <div className="flex justify-center items-center flex-col h-full">
        <p
          onClick={handleMyProfile}
          className="cursor-pointer text-gradient font-chakra font-bold text-2xl"
        >
          My Profile
        </p>
        <p
          onClick={handleWatchDogs}
          className="cursor-pointer text-gradient font-chakra mt-3 font-bold text-2xl"
        >
          What is Watch Dogs
        </p>
        <p
          //   onClick={handleWatchDogs}
          className="cursor-pointer text-gradient font-chakra mt-3 font-bold text-2xl"
        >
          Sign Up <span className="text-lg">(Get 10 extra search credits)</span>
        </p>
        {/* Additional menu items here */}
      </div>
    </div>
  );
}

export default ResponsiveButton;
