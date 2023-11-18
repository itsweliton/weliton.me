import React from "react";
import { Link } from "gatsby";
import "../styles/sidebar.scss";
import { useLocation } from "@reach/router";

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="sidebar">
      <div className="header">
        <h2>Weliton Soranzo</h2>
        <p>Software Engineer</p>
      </div>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname.startsWith("/about") ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname.startsWith("/posts") ? "active" : ""}>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
