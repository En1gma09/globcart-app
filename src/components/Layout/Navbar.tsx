import { Container } from "@mui/material";
import React from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    BoldLogoSpan,
    LightLogoSpan
} from '../../styles/Navbar.style';

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/home">Home</NavbarLink>
                        <NavbarLink to="/orders">Orders</NavbarLink>
                        <NavbarLink to="/products">Products</NavbarLink>
                        <NavbarLink to="/cart">Cart</NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <BoldLogoSpan>GlobCart<LightLogoSpan>.com.br</LightLogoSpan></BoldLogoSpan>
                </RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
    );
}