import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
      <Link to="/" className="text-blue-600 font-semibold hover:text-blue-800">
        Home
      </Link>
      <Link to="/projects" className="text-blue-600 font-semibold hover:text-blue-800">
        Projects
      </Link>
      <Link to="/skills" className="text-blue-600 font-semibold hover:text-blue-800">
        Skills
      </Link>
      <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
