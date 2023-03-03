import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { FaSearch } from "react-icons/fa";
import '../styles/navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <h1 className="logo">M</h1>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <li>Samples</li>
        <li>Features</li>
        <li>Layouts</li>
        <li>Our Shop</li>
        <li>Buy Theme</li>
        <FaSearch style={{ marginTop: "4px" }} />
      </ul>
    </nav>
  );
};

export default Navbar;
