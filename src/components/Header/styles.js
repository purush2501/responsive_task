import styled from 'styled-components';
import { InputBase, Typography, IconButton, Badge, Divider } from '@mui/material';

const spacingValue = 8;

export const Div = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 1% 2%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

export const Logo = styled(Typography)`
  margin-right: ${spacingValue * 4}px;
  color: black;
`;

export const Image = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacingValue * 2}px;
  margin-right: 16px;
    width: 100%;
    justify-content: space-around;
`;

export const MenuItem = styled(Typography)`
  margin: 0 ${spacingValue * 2}px;
  cursor: pointer;
  font-size: 0.9rem !important;
  font-weight: 600 !important;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20%;
  width: 40%;
`;

export const Search = styled.div`
  position: relative;
  border-radius: ${spacingValue}px;
  background-color: #f2f2f2;
  width: 70%;
  box-shadow: 4px 4px 0px #7851A9;
  display: flex; 
`;

export const SearchIconWrapper = styled.div`
  padding-right: ${spacingValue}px;
  height: 100%;
  position: absolute;
  right: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg { /* Target the SVG element inside the SearchIconWrapper */
    color: gray; /* Set the color to gray */
  }
`;

export const Input = styled(InputBase)`
  && {
    padding: ${spacingValue}px;
    width: calc(100% - ${spacingValue * 4}px);
  }
`;

export const Icons = styled.div`
  margin-left: ${spacingValue * 2}px;
  display: flex;
  align-items: center;
  width: 30%;
`;

export const StyledIconButton = styled(IconButton)`
  /* Add any specific styles for IconButton */
`;

export const StyledBadge = styled(Badge)`
`;

export const StyledDivider = styled(Divider)`
  /* Add any specific styles for Divider */
`;
