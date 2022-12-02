import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

export default function NavBar() {
  const Container = styled.div.attrs({
    className: "container",
  })``;

  const Nav = styled.nav.attrs({
    classname: "navbar navbar-expand-lg navbar-dark bg-dark",
  })`
    margin-bottom: 20px;
  `;

  return (
    <Container>
      <Nav>
        <Logo />
        <Links />
      </Nav>
    </Container>
  );
}
