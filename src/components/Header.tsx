import React from "react";
import MenuIcon from "../images/icons/menu-icon.inline.svg";
import "../styles/header.scss";
import "../styles/utils.scss";

interface HeaderProps {
  mobOpen: boolean;
  setMobOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ mobOpen, setMobOpen, pageTitle }) => {
  return (
    <div className="header sticky-header">
      <MenuIcon className="icon" onClick={() => setMobOpen(true)} />
      {pageTitle ? <h2>{pageTitle}</h2> : null}
    </div>
  );
};

export default Header;
