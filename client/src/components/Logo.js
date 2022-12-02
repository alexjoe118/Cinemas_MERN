import React from "react";
import styled from "styled-components";

import logo from "../logo.svg";

export default function Logo() {
  const Wrapper = styled.a.attrs({
    className: "navbar-brand",
  })``

  return (
    <Wrapper href="https://sambarros.com">
      <img src={logo} width="50" height="50" alt="sambarros" />
    </Wrapper>
  );
}
