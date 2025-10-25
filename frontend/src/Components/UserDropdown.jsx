import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const { session, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Successfully logged out!");
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500 hover:cursor-pointer"
      >
        <span className="text-sm font-medium">
          {session?.user?.email.split("@")[0]}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white  rounded-md shadow-lg border-2 border-red-500 hover:bg-red-500 transition duration-300">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm rounded-md text-red-500 font-semibold hover:cursor-pointer  hover:text-white transition duration-300 flex items-center justify-center gap-3"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
