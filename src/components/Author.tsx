import React from "react";
import "../styles/author.scss";

interface AuthorProps {
  image: string;
  name: string;
  role: string;
}

const Author: React.FC<AuthorProps> = ({ image, name, role }) => {
  return (
    <div className="author">
      <div className="image"></div>
      <div className="content">
        <h2 className="name">{name}</h2>
        <p className="role">{role}</p>
      </div>
    </div>
  );
};

export default Author;
