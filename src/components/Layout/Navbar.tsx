import { useNavigate } from "react-router-dom";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    BoldLogoSpan,
    LightLogoSpan,
    ShoppingCart
} from '../../styles/Navbar.style';

export default function Navbar() {

    const navigate = useNavigate();

    const handleClickCart = () => {
        navigate("/cart");
    }

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
                    <ShoppingCart onClick={handleClickCart} />
                    <BoldLogoSpan>GlobCart<LightLogoSpan>.com.br</LightLogoSpan></BoldLogoSpan>
                </RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
    );
}