import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #1B2C40;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;


export const NavbarExtendedContainer = styled.div``;

export const BoldLogoSpan = styled.span`
    display: flex;
    width: 200px;
    font-size: 30px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-top: 10px;
`;

export const LightLogoSpan = styled.div`
    width: 100px;
    font-size: 18px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-left: 2px;
    margin-top: 11px;
`;