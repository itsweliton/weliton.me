import React from "react";
import MenuIcon from "../images/icons/menu-icon.inline.svg";

interface HeaderProps {
  mobOpen: boolean;
  setMobOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ mobOpen, setMobOpen, pageTitle }) => {
  return (
    <div className="sticky-header" onClick={() => setMobOpen(!mobOpen)}>
      <MenuIcon />
      {pageTitle ? <h2>{pageTitle}</h2> : null}
    </div>
  );
};

export default Header;
