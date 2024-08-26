import React, { useContext, useState } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { NameContext } from "../context/NameContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

export default function Navbar() {
  let { cartCount, setTokenStatus, tokenStatus } = useContext(CartContext);
  let { wishlistCount } = useContext(WishlistContext);
  let { userData, setUserData } = useContext(NameContext);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <>
      <nav className="py-2 z-50 bg-gray-200 capitalize text-gray-500 md:fixed md:top-0 md:end-0 md:start-0">
        <div className="container  flex flex-wrap md:flex-nowrap justify-between items-center md:space-x-2">
          <div className="logo">
            <img src={logo} className="w-36" alt="logo" />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="icon md:hidden cursor-pointer"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div
            className={` ${
              open ? "flex" : "hidden"
            } md:flex  flex-col md:flex-row justify-between items-center basis-full`}
          >
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
              {userData && (
                <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="">
                      home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="products">
                      products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="categories">
                      categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="brands">
                      brands
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
              {userData && (
                <>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="cart">
                      <i className="fa-solid fa-xl fa-cart-shopping relative text-mainColor">
                        <span className="absolute -top-[15px] left-1/2 -translate-x-1/2 text-xs text-white">
                          {tokenStatus && cartCount ? cartCount : 0}
                        </span>
                      </i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="wishlist">
                      <i className="fa-solid fa-heart text-red-500 text-3xl relative">
                        <span className="absolute top-[9px] left-1/2 -translate-x-1/2 text-xs text-white">
                          {tokenStatus && wishlistCount ? wishlistCount : 0}
                        </span>
                      </i>
                    </NavLink>
                  </li>
                </>
              )}

              <li className="space-x-2 text-black">
                <a target="blank" href="https://www.facebook.com/nader.m.khaled/">
                  <i className="fab fa-facebook-f cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/feed/"
                >
                  <i className="fab fa-linkedin-in cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/watch?v=4Oj3JZY8hqw"
                >
                  <i className="fab fa-youtube cursor-pointer"></i>
                </a>
                <a target="blank" href="https://github.com/NaderKhaled1">
                  <i className="fab fa-github cursor-pointer"></i>
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram cursor-pointer"></i>
                </a>
              </li>
              {userData ? (
                <li>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      localStorage.removeItem("userToken");
                      setUserData(null);
                      navigate("login");
                      setTokenStatus(false);
                    }}
                  >
                    logout
                  </span>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="login">
                      login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => setOpen(false)} to="register">
                      register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
