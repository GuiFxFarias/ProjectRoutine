import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 5vh;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.darkOrange};
`;

export const MenuMobile = styled.div`
  font-size: 14pt;
  color: white;
`;

export const Name = styled.div``;

export const PlaceLogin = styled.div``;
