import React from "react";
import "./header.css";

import {NavLink} from "react-router-dom"
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";

import { VscMenu } from "react-icons/vsc";
import { TbBrandAirbnb } from "react-icons/tb";

import Login from "../LoginForm/login";
import Register from "../RegisterForm/regsiter";

class Header extends React.Component {
  state = {
    activeTabName: "Welcome",
    isLoginModelOpen: false,
    isRegisterModelOpen: false,
    isDropdownOpen: false,
  };

  onclickTab = (tabName) => {
    this.setState({ activeTabName: tabName });
  };

  toggleSignUpModel = () => {
    // const {isLoginModelOpen} = this.state
    this.setState((prevState) => ({
      isLoginModelOpen: !prevState.isLoginModelOpen,
      isRegisterModelOpen: false,
    }));
    // console.log(isLoginModelOpen)
  };

  toggleRegisterModel = () => {
    // const {isRegisterModelOpen} = this.state
    this.setState((prevState) => ({
      isRegisterModelOpen: !prevState.isRegisterModelOpen,
      isLoginModelOpen: false,
    }));
    // console.log(isRegisterModelOpen)
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  onClickLogotButton = () => {
    console.log("Logout Function");
  };

  render() {
    const {
      activeTabName,
      isLoginModelOpen,
      isRegisterModelOpen,
      isDropdownOpen,
    } = this.state;
    console.log(activeTabName)
    return (
      <div>
        <div className="header-container">
          <div className="header-logo-container">
            <NavLink className="airbnb-home-link" to="/"><TbBrandAirbnb className="airbnb-logo" /> Womenbnb</NavLink>
          </div>
          <ul className="header-tabs-container">
            <NavLink to="/" className="header-tabs">Welcome</NavLink>
            <NavLink to="/safety" className="header-tabs">Safety</NavLink>
            <NavLink to="/adventure" className="header-tabs">Adventure</NavLink>
            <NavLink to="/community" className="header-tabs">Community</NavLink>
          </ul>
          <div className="profile-container">
            <div className="register-login-buttons-container">
              <button className="login-button" onClick={this.toggleSignUpModel}>
                Login
              </button>
              <button
                className="register-button"
                onClick={this.toggleRegisterModel}
              >
                Register
              </button>
            </div>
            <div className="profile-card">
              <button className="profile-button" onClick={this.toggleDropdown}>
                <VscMenu className="menu-icon" />
                <p className="profile-letter">R</p>
              </button>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="profile-dropdown">
            <ul className="dropdown-list-container">
              <li>Message</li>
              <li>Notifications</li>
              <li>Trips Whislist</li>
              <hr />
              <li>Home</li>
              <li>Account</li>
              <hr />
              <li>Help Center</li>
              <li className="login-or-logot">
                <button
                  className="list-login-buttons"
                  onClick={this.toggleSignUpModel}
                >
                  <RiLoginBoxLine /> Login /{" "}
                </button>
                <button
                  className="list-login-buttons"
                  onClick={this.onClickLogotButton}
                >
                  <RiLogoutBoxLine />Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        {isLoginModelOpen && (
          <div className="login-model">
            <div className="login-model-content">
              <div className="close-button-container">
                <button className="close" onClick={this.toggleSignUpModel}>
                  &times;
                </button>
              </div>
              <Login />
            </div>
          </div>
        )}
        {isRegisterModelOpen && (
          <div className="register-model">
            <div className="resgiter-model-content">
              <div className="close-button-container">
                <button className="close" onClick={this.toggleSignUpModel}>
                  &times;
                </button>
              </div>
              <Register />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
