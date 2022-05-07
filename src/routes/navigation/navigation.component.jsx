import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown-logo.svg";
import { UserContext } from "../../contextes/user.context";
import { signOutUser } from "../../services/firebase/firebase.service";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
