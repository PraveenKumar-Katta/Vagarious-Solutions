import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navbar = ({setActiveTab}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const [active, setActive] = useState("Home");  
  const list = ["Home", "About us", "Services", "Careers", "Contact us"];

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [theme]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 shadow 
  ${
    theme
      ? "bg-black/40 backdrop-blur-md border-b border-white/20"
      : "bg-white/40 backdrop-blur-md border-b border-gray-200/40"
  }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <img
            className="h-12 md:h-14"
            src="https://vagarioussolutions.com/images/vagarious.png"
            alt="Vagarious Logo"
          />
        </div>

        <nav className="hidden md:flex gap-8 items-center text-lg">
          {list.map((item) => (
            <h1
              key={item}
              className={`relative font-semibold text-xl cursor-pointer px-3 py-2 rounded transition
                ${
                  active === item
                    ? "text-blue-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-blue-500"
                    : "hover:text-blue-500 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-blue-300"
                }`}
              onClick={() => {
                setActive(item)
                setActiveTab(item)
              }}
            >
              {item}
            </h1>
          ))}
          
          <button
            onClick={() => setTheme(!theme)}
            className={`w-16 h-8 flex cursor-pointer items-center rounded-full p-1 transition-all duration-500 
              ${
                theme
                  ? "bg-yellow-400 justify-end"
                  : "bg-gray-600 justify-start"
              }`}
          >
            <div className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center">
              {theme ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-blue-300" />
              )}
            </div>
          </button>
        </nav>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full ${
            theme ? "bg-black" : "bg-white"
          } shadow z-50 md:hidden  border-t border-gray-200`}
        >
          <nav className="flex flex-col items-center gap-4 py-6 text-lg">
            {["Home", "About us", "Services", "Careers", "Contact us"].map(
              (item) => (
                <h1
                  key={item}
                  className="font-semibold cursor-pointer px-4 py-2 rounded hover:bg-gray-200 w-full text-center transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </h1>
              )
            )}
            <button className="px-5 py-2 rounded bg-blue-500 text-white text-lg font-semibold hover:bg-blue-700 transition">
              Apply Here
            </button>
            <button
              onClick={() => setTheme(!theme)}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-500 
              ${
                theme
                  ? "bg-yellow-400 justify-end"
                  : "bg-gray-600 justify-start"
              }`}
            >
              <div className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center">
                {theme ? (
                  <Sun size={18} className="text-yellow-500" />
                ) : (
                  <Moon size={18} className="text-blue-300" />
                )}
              </div>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
