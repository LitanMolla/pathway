import React, { useEffect, useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import logo from "/src/assets/logo.jpeg";
import {
  FaRegCircleUser,
  FaUserGraduate,
  FaUserTie,
  FaXmark,
} from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import PBase from "../PBase";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [login, setLogin] = useState(false);
  // const [login, setlogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const toggelActive = () => {
  //   setlogin(!login);
  // };

  //scroll behave
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  //scroll behave

  return (
    <nav className={`lg:py-3 shadow-sm sticky w-full top-0 z-1000 bg-white`}>
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <NavLink to={"/"} className="max-w-35">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </NavLink>
          {/* Logo */}

          {/* Desktop Menu*/}
          <div className="flex items-center gap-x-10">
            <ul className="flex items-center space-x-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg"
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg"
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/university"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Universities
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/our-services"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Our Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium text-base uppercase ${
                      isActive
                        ? " text-primary border-b-2 border-primary shadow-lg  "
                        : "text-secondary hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </Container>
      {/* =============Mobile Menu============= */}
      <div className={`lg:hidden py-2 px-3 md:px-5 bg-white z-50`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to={"/"} className="max-w-25">
            <picture>
              <img src={logo} alt="logo" />
            </picture>
          </NavLink>
          {/* Logo */}

          <div className="flex items-center gap-x-3 ">
            
            <button
              className="lg:hidden "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaXmark className="text-4xl text-secondary" />
              ) : (
                <HiBars3 className="text-4xl text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="relative pb-4 border-t border-gray-200 z-50">
              <ul className="flex flex-col pt-2 text-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium${
                        isActive
                          ? " text-primary border-b-2 border-primary shadow-lg"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium${
                        isActive
                          ? " text-primary border-b-2 border-primary shadow-lg"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/university"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium${
                        isActive
                          ? " text-primary border-b-2 border-primary shadow-lg"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Universities
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-services"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium${
                        isActive
                          ? " text-primary border-b-2 border-primary shadow-lg"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `block px-4 py-3 font-medium${
                        isActive
                          ? " text-primary border-b-2 border-primary shadow-lg"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-tertiary text-primary border-b-2 border-primary"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
