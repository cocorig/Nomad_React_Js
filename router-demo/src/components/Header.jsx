import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeftWrapper>
          <NavLink to="/">
            <h1>LOGO</h1>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/movie">영화</NavLink>
            </li>
            <li>
              <NavLink to="/tv">TV 프로그램</NavLink>
            </li>
            <li>
              <NavLink to="/person">인물</NavLink>
            </li>
          </ul>
        </HeaderLeftWrapper>
        <HeaderRightWrapper></HeaderRightWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  border-bottom: 1px solid #dedede;
`;

const HeaderWrapper = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
`;
const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  ul {
    display: flex;
  }
  li {
    padding: 8px;
    margin-left: 20px;
  }
`;
const HeaderRightWrapper = styled.div``;

const NavLink = styled(Link)`
  font-weight: 800;
`;
