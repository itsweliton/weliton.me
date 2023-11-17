import { Link } from "gatsby";
import React from "react";
import "../styles/sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
