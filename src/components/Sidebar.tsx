import React from "react";
import { Link } from "gatsby";
import "../styles/sidebar.scss";
import { useLocation } from "@reach/router";
import HomeIcon from "../images/icons/home-icon.svg";
import PenIcon from "../images/icons/pen-icon.inline.svg";
import AboutIcon from "../images/icons/about-icon.inline.svg";
import TerminalIcon from "../images/icons/terminal-icon.inline.svg";
import SongsIcon from "../images/icons/songs-icon.inline.svg";
import ThunderIcon from "../images/icons/thunder-icon.inline.svg";
import ArrowIcon from "../images/icons/arrow-up-icon.inline.svg";
import ContacIcon from "../images/icons/contact-icon.inline.svg";

type SidebarProps = {
  isOpen: boolean;
  close: (value: boolean) => void;
};

const Sidebar = ({ isOpen, close }: SidebarProps) => {
  const location = useLocation();

  return (
    <div>
      <nav className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="header">
          <h2>Weliton Soranzo</h2>
          <p>Software Engineer</p>
          <div className="close-icon" onClick={() => close(false)}>
            <button className="closeMenu" id="closeMenu">
              ×
            </button>
          </div>
        </div>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link className="sidebar-link" to="/">
              <HomeIcon />
              Home
            </Link>
          </li>
          <li
            className={location.pathname.startsWith("/posts") ? "active" : ""}
          >
            <Link className="sidebar-link" to="/posts">
              <PenIcon />
              Posts
            </Link>
          </li>
        </ul>

        <ul>
          <div className="label">me</div>
          <li>
            <Link className="sidebar-link" to="/">
              <AboutIcon />
              About
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="/">
              <TerminalIcon />
              Stack
            </Link>
          </li>
          <li>
            <Link className="sidebar-link" to="/">
              <SongsIcon />
              Fav songs
            </Link>
          </li>
        </ul>

        <ul>
          <div className="label">projects</div>
          <li>
            <Link className="sidebar-link external-link" to="/">
              <ThunderIcon />
              espressodesk.io
              <ArrowIcon />
            </Link>
          </li>
          <li>
            <Link className="sidebar-link external-link" to="/">
              <ThunderIcon />
              Petly
              <ArrowIcon />
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link className="sidebar-link" to="/">
              <ContacIcon />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="background-image"></div>
    </div>
  );
};

export default Sidebar;
