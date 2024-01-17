import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { HeaderContainer, Div, Image, Menu, MenuItem, Search, SearchIconWrapper, Input, Icons, StyledIconButton, StyledBadge, RightSection, LeftSection } from './styles';
import { Divider } from '@mui/material';
import logo from '../../images/veirdo_logo_300x.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <LeftSection>
                <Div>
                    <Image src={logo} alt={logo} />
                </Div>
                <Menu>
                    <MenuItem>NEW ARRIVALS</MenuItem>
                    <MenuItem>MEN</MenuItem>
                    <MenuItem>WINTER COLLECTION</MenuItem>
                    <MenuItem>SHOP BY MERCH</MenuItem>
                    <MenuItem>UNISEX</MenuItem>
                </Menu>
            </LeftSection>

            <RightSection>
                <Search>
                    <SearchIconWrapper>
                        <SearchOutlinedIcon />
                    </SearchIconWrapper>
                    <Input placeholder='Try searching "T-shirts"' />
                </Search>

                <Icons>
                    <StyledIconButton color="inherit">
                        <PersonOutlineOutlinedIcon />
                    </StyledIconButton>
                    <StyledIconButton color="inherit">
                        <StyledBadge badgeContent={2} color="secondary">
                            <FavoriteBorderOutlinedIcon />
                        </StyledBadge>
                    </StyledIconButton>
                    <StyledIconButton color="inherit">
                        <StyledBadge badgeContent={3} color="secondary">
                            <ShoppingBagOutlinedIcon />
                        </StyledBadge>
                    </StyledIconButton>
                </Icons>
            </RightSection>
            <Divider />
        </HeaderContainer>
    );
};

export default Header;
