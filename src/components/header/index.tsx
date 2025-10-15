import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";

import type { RootState } from "@/store";

// Import your PNG logo from the public folder
const logoPath = "/assets/icons/logo/tijarico-logo.png";

type HeaderType = {
  isErrorPage?: boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage)
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef(null);
  const searchRef = useRef(null);

  const handleScroll = () => {
    setOnTop(window.pageYOffset === 0);
  };

  // Add proper dependencies to avoid ESLint warning
  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) return;

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [arrayPaths, isErrorPage, router.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const closeSearch = () => setSearchOpen(false);

  // Close when clicked outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/" className="site-logo flex items-center">
          <Image
            src={logoPath}
            alt="TijariCo Logo"
            width={150}
            height={50}
            priority
          />
          <span className="ml-2 text-xl font-bold">TijariCo</span>
        </Link>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""} flex gap-6`}
        >
          <Link href="/products">Products</Link>
          <Link href="/inspiration">Inspiration</Link>
          <Link href="/rooms">Rooms</Link>
          <button className="site-nav__btn">Account</button>
        </nav>

        {/* Actions */}
        <div className="site-header__actions flex items-center gap-4">
          {/* Search */}
          <div
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            } relative`}
          >
            <form className="search-form">
              <i
                className="icon-cancel absolute right-2 top-2 cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
                className="pl-2 py-1 border rounded"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search cursor-pointer"
            />
          </div>

          {/* Cart */}
          <Link href="/cart">
            <button className="btn-cart relative">
              <i className="icon-cart" />
              {cartItems.length > 0 && (
                <span className="btn-cart__count absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </Link>

          {/* Avatar/Login */}
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <i className="icon-avatar" />
            </button>
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
