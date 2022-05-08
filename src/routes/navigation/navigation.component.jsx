import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown-logo.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contextes/cart.context";
import { UserContext } from "../../contextes/user.context";
import { signOutUser } from "../../services/firebase/firebase.service";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.style";
// import "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrownLogo} className="logo" alt="" />
          <h3>
            Crown <span>Clothing</span>
          </h3>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            ARTICLES
          </NavLink>
          {currentUser ? (
            <NavLink to="/auth" onClick={signOutUser}>
              DECONNEXION
            </NavLink>
          ) : (
            <NavLink to="/auth">
              S'INSCRIRE
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
