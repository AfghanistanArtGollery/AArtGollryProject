'use client'

import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import AddToWishlist from "./AddToWishlist";
import { useState } from "react";

const Details = ({ artwork }) => {

  const [count, setCount] = useState(1)


  const addToCart = () => {

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    if (cart.length) {
      const isCart = cart.some(item => item.id == artwork._id)
      // if (isCart) {
      //   cart.forEach((item) => {
      //     if (item.id === artwork._id) {
      //       item.count = item.count + count
      //     }
      //   })

      localStorage.setItem('cartart', JSON.stringify(cart))

      //  }
    } else {
      const cartItem = {
        id: artwork._id,
        name: artwork.name,
        img: artwork.images,
        price: artwork.price,
        count,
      }
      cart.push(cartItem)
      localStorage.setItem('cartart', JSON.stringify(cart))

    }
    swal({
      title:'Sucessfully added to cart',
      icon:'success',
      button:'Ok'
    })



  }





  return (
    <main >



      <div>
        <img className={styles.pro} src="/images/shahin.jpg" />
        <p style={{ marginLeft: "60px", marginTop: "-30px", marginBottom: "30px" }}>{artwork.artist_id.name}</p>

      </div>
      <h3 className={styles.h3}>{artwork.name}</h3>
      <div className="d-flex align-items-center ">

        <button
          onClick={addToCart}
          className="btn"
          style={{
            fontSize: "15px",
            padding: "10px 10px",
            border: "none",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
          }}
        >
          <FaShoppingCart size={20} />
          Add To Cart
        </button>

        <AddToWishlist productID={artwork._id} />
      </div>


      <p className="text-primary ps-4 fs-4 fw-bold">${artwork.price}</p>

     <Link href={`/checkout/${artwork._id}`}>
     <button type="button" className={styles.btn}>By Now!</button>
     </Link> 

      {/* Social Icons */}

      <div className={styles.social} >
        <ul className="list-inline">
          <li className="list-inline-item">
            <a className="a2a_button_facebook" href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.artgallery.co.uk%2Flisting%2Fanni4cxpp7s-harebells-in-watercolour&amp;linkname=Harebells%20in%20watercolour&amp;linknote=">
              Facebook
            </a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_twitter" href="/#twitter">Twitter</a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_pinterest" href="/#pinterest">Pinterest</a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_email" href="/#email">Email</a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_linkedin" href="/#linkedin">LinkedIn</a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_whatsapp" href="/#whatsapp">WhatsApp</a>
          </li>
          <li className="list-inline-item">
            <a className="a2a_button_wechat" href="/#wechat">WeChat</a>
          </li>
        </ul>
      </div>



    </main>
  );
};

export default Details;
