'use client';
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosList, IoMdSettings, IoIosHeart, IoMdPerson } from 'react-icons/io'; // Import necessary icons
import { IoTicketOutline } from "react-icons/io5";
import { TfiComments } from "react-icons/tfi";
import { GrUserAdmin } from "react-icons/gr";

export default function Navbar({ isAdmin, isLogin, wishlistLength }) {

  const [fixTop, setFixTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);  // State for cart length


  const fixedNavbarToTop = () => {
    const currentPageScroll = window.scrollY;
    setFixTop(currentPageScroll > 136);
  };

  useEffect(() => {
    window.addEventListener('scroll', fixedNavbarToTop);
    return () => window.removeEventListener('scroll', fixedNavbarToTop);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // This useEffect ensures that `localStorage` is accessed only in the client
    if (typeof window !== 'undefined') {
      const cartData = localStorage.getItem('cartart');
      if (cartData) {
        const cartArray = JSON.parse(cartData);
        setCartLength(cartArray.length);  // Set the cart length from localStorage
      }
    }
  }, []);  // Empty dependency array ensures it runs once after component mount


  return (

    <nav className={fixTop ? styles.navbar_fixed : styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>

          {/* Burger Icon */}
          <button className={styles.burger} onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
          <Link href="/">
            <img src="/images/logoart.png" alt="Logo" className={styles.logoImg} />
          </Link>
        </div>

        {/* Menu Links */}

        {!isLogin ? (
          <li><Link href="/login-register">Login & Register</Link></li>
        ) : (
          <li className={styles.dropdown}>
            <Link href="/p-user">
              User Accounts <IoIosArrowDown />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/p-user/orders"><IoIosList />Orders</Link>
              <Link href="/p-user"> <IoMdPerson /> User Panel</Link>

              {isAdmin &&

                <Link href="/p-admin"> <GrUserAdmin /> Admin Panel</Link>
              }

              <Link href="/p-user/tickets"><IoTicketOutline />Tickets</Link>
              <Link href="/p-user/comments"><TfiComments />Comments</Link>
              <Link href="/p-user/wishlist"><IoIosHeart />Wishlist</Link>
              <Link href="/p-user/account-details"><IoMdSettings />Account Details</Link>
            </div>
          </li>
        )}

        <div className={styles.icons}>
          <Link href="/cart">
            <FaShoppingCart />
            <span>{cartLength}</span>
          </Link>
          <Link href="/wishlist">
            <FaRegHeart />
            <span>{wishlistLength}</span>
          </Link>
        </div>

        <ul className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>


          <li><Link href="/">Home</Link></li>
          <li><Link href="/listings">All art</Link></li>
          <li><Link href="/listings/category/painting">Painting</Link></li>
          <li><Link href="/listings/category/drawing">Drawing</Link></li>
          <li><Link href="/listings/category/photograph">Photograph</Link></li>
          <li><Link href="/buy-art">Buy Art</Link></li>
          <li><Link href="/sell-art">Sell Art</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact-us">Contuct us</Link></li>
          <li><Link href="/about-us">About</Link></li>






        </ul>

        {/* Icons */}


      </div>
    </nav>
  );
}
