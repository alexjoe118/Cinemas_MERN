import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collapse navbar-collapse",
})``;
export default function Links() {
  return (
    <React.Fragment>
      <Link to="/" className="navbar-brand">
        My first MERN Application
      </Link>

      <List>
        
          <Link to="/movies/list" className="nav-link">
            List Movies
          </Link>
        
        
          <Link to="/movies/create" className="nav-link">
            Create Movie
          </Link>
        
      </List>
    </React.Fragment>
  );
}
