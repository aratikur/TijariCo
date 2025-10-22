// src/components/header/index.tsx
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";

import type { RootState } from "@/store";

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
  const navRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);

  const headerClass = () => {
    setOnTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) return;

    headerClass();
    window.addEventListener("scroll", headerClass);
    return () => {
      window.removeEventListener("scroll", headerClass);
    };
  }, [arrayPaths, isErrorPage, router.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const closeSearch = () => setSearchOpen(false);

  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  const tijaricoLogo = "/images/tijarico-logo.png"; // PNG logo in public/images/

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="site-logo flex items-center gap-2">
          <Image
            src={tijaricoLogo}
            alt="TijariCo Logo"
            width={200}
            height={75}
            priority
            className="rounded-sm" // small rounded corners
          />
        </Link>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`site-nav flex gap-6 items-center ${
            menuOpen ? "site-nav--open" : ""
          }`}
        >
          <Link href="/products">Products</Link>
          <Link href="/inspiration">Inspiration</Link>
          <Link href="/rooms">Rooms</Link>
          <button className="site-nav__btn">Account</button>
        </nav>

        {/* Header actions */}
        <div className="site-header__actions flex items-center gap-4">
          {/* Search */}
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className="search-form flex items-center gap-2">
              <i className="icon-cancel" onClick={() => setSearchOpen(false)} />
              <input
                type="text"
                name="search"
                placeholder="Search products..."
              />
            </form>
            <i
              className="icon-search"
              onClick={() => setSearchOpen(!searchOpen)}
            />
          </button>

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

          {/* Account */}
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <i className="icon-avatar" />
            </button>
          </Link>

          {/* Mobile menu button */}
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
