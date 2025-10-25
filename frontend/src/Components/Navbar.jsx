import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import menuIcon from "../assets/menu.png";
import crossIcon from "../assets/close.png";
import logo from "../assets/cas_logo.png";
import UserDropdown from "./UserDropDown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useAuth();

  console.log(session?.user?.email);

  const handleClick = () => {
    const whatsAppLink = "https://chat.whatsapp.com/BhEtOii34mF9rCl8vwqAf9";
    window.open(whatsAppLink, "_blank");
  };

  return (
    <div className="fixed w-full bg-white shadow-xl md:p-5 p-2 z-50">
      <div className="flex items-center justify-between">
        {/* LEFT: Logo + Title */}
        <div className="flex items-center gap-2">
          <img className="h-10 w-10 md:h-14 md:w-14" src={logo} alt="logo" />
          <h1 className="font-bold text-blue-800 text-base md:text-xl lg:text-2xl">
            Computer Application Society
          </h1>
        </div>

        {/* CENTER: Links (hidden on mobile + medium screen) */}
        <ul className="hidden lg:flex lg:gap-8 items-center">
          <Link
            to={"/cas_bca.sit/#Home"}
            className="hover:font-semibold hover:underline transform transition duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to={"/cas_bca.sit/#Events"}
            className="hover:font-semibold hover:underline transform transition duration-300 hover:scale-105"
          >
            Events
          </Link>
          <Link
            to={"/cas_bca.sit/#About"}
            className="hover:font-semibold hover:underline transform transition duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            to={"/cas_bca.sit/#Contact"}
            className="hover:font-semibold hover:underline transform transition duration-300 hover:scale-105"
          >
            Contact
          </Link>
          <Link
            to={"/cas_bca.sit/addProject"}
            className="hover:font-semibold hover:underline transform transition duration-300 hover:scale-105"
          >
            Add Project
          </Link>
        </ul>

        {/* RIGHT: Actions (hidden on mobile + medium screen) */}
        <div className="hidden lg:flex items-center gap-4">
          {session?.user ? (
            <UserDropdown />
          ) : (
            <Link
              to={"/cas_bca.sit/auth/login"}
              className="rounded-sm px-4 py-3 font-semibold text-white bg-blue-700 hover:bg-blue-500 transform transition duration-300 hover:scale-105"
            >
              Login
            </Link>
          )}
          <button
            onClick={handleClick}
            className="rounded-sm px-4 py-3 font-semibold bg-amber-400 hover:bg-amber-500 transform transition duration-300 hover:scale-105 hover:cursor-pointer"
          >
            Join Society
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <img
            src={isOpen ? crossIcon : menuIcon}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 p-5">
          <a href="#Home" className="hover:font-semibold hover:underline">
            Home
          </a>
          <a href="#Events" className="hover:font-semibold hover:underline">
            Events
          </a>
          <a href="#About" className="hover:font-semibold hover:underline">
            About
          </a>
          <a href="#Contact" className="hover:font-semibold hover:underline">
            Contact
          </a>
          <Link
            to={"/cas_bca.sit/auth/login"}
            className="rounded-sm px-4 py-2 font-semibold text-white bg-blue-700 hover:bg-blue-500"
          >
            Login
          </Link>
          <button
            onClick={handleClick}
            className="border rounded-sm px-4 py-2 bg-amber-400 hover:bg-amber-500"
          >
            Join Society
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
