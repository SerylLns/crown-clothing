import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown-logo.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contextes/cart.context";
import { UserContext } from "../../contextes/user.context";
import { signOutUser } from "../../services/firebase/firebase.service";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} className="logo" alt="" />
          <h3>
            Crown <span>Clothing</span>
          </h3>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            ARTICLES
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              DECONNEXION
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              S'INSCRIRE
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
