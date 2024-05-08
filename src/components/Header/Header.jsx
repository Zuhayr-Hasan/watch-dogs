import { useState } from "react";
import { BsThreeDots, BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ResponsiveButton from "./ResponsiveButton";
import Logo from "../../assets/logo.png";
import "../../App.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/Signup");
  };

  const handleSearch = () => {
    navigate("/dashboard");
  };

  const handleWatchDogs = () => {
    // navigate("/home");
    console.log("Hello");
  };

  const onClose = () => {
    setIsMenuOpen(false);
    console.log("On close button called");
  };

  return (
    <div className="font-sans flex flex-col md:flex-row">
      {isMenuOpen ? (
        <ResponsiveButton onClose={onClose} />
      ) : (
        <nav className="bg-lineargradient pt-2 pb-2 flex justify-between w-full px-10 bg-[#000]">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="w-full flex items-center justify-between">
              <img src={Logo} className="h-13" alt="logo" />
              <button className="text-3xl p-3 md:hidden" onClick={toggleMenu}>
                <BsList style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          <div
            className={`md:flex ${isMenuOpen ? "block" : "hidden"} flex-grow`}
          >
            <div className="flex flex-col md:flex-row items-center ml-[5rem] w-full">
              <p
                className="text-[#fff] hover:text-[#FFA234] cursor-pointer"
                onClick={handleSearch}
              >
                Search
              </p>
              <p className="cursor-pointer ml-[3rem] text-[#fff] hover:text-[#FFA234]">
                What is WatchDogs?
              </p>
            </div>
          </div>
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex items-center">
              <div className="flex items-center">
                <BsThreeDots className="mr-4 w-10 h-6" color="#D9D9D9" />
              </div>
              <div className="flex items-center">
                {/* Dropdown menu */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-gray-200 rounded-full p-3 ml-2 focus:outline-none"
                  >
                    <p className="text-black">AN</p>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div
                        className="py-1 bg-[#eee] rounded-2xl"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <p className="pt-2 pl-3">You’re currently</p>
                        <p className="pl-3">Anonymous..</p>
                        <div className="mt-3 flex justify-between px-3">
                          <div className="flex">
                            <img className="h-4 mt-1" src={Logo} alt="logo" />
                            <p className="ml-1 text-sm">10</p>
                          </div>
                          <button className="text-sm bg-[#CCCCCC] rounded-md p-1 px-2">
                            Buy Credits
                          </button>
                        </div>
                        <button
                          className="mt-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#ddd] hover:text-gray-900 w-full text-left cursor-pointer"
                          onClick={handleLogout}
                        >
                          My portfolio
                        </button>
                        <button
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-[#ddd] hover:text-gray-900 w-full text-left"
                          onClick={handleWatchDogs}
                        >
                          What is WatchDogs?
                        </button>
                        <button className="px-4 py-2 text-sm text-gray-700 hover:bg-[#ddd] hover:text-gray-900 w-full text-left">
                          Sign Up (Get <span className="text-gradient">10</span>{" "}
                          extra search credits)
                        </button>
                        <div className="border-t flex pt-2 pb-2">
                          <p className="pl-4 mt-1 text-xs mr-2 text-[#aaa]">
                            Content policy
                          </p>
                          <p className="mt-1 text-xs mr-2 text-[#aaa]">Terms</p>
                          <p className="mt-1 text-xs text-[#aaa]">About</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
