import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MiApp</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
