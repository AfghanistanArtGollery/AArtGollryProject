'use client'

import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import { TbDiscountOff } from "react-icons/tb";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import AddToWishlist from "./AddToWishlist";
import { useState, useEffect } from "react";

const Details = ({ artwork }) => {

  const [count, setCount] = useState(1)
  const [discounts, setDiscounts] = useState([]);

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
      title: 'Sucessfully added to cart',
      icon: 'success',
      button: 'Ok'
    })



  }


  // get all discounts
  useEffect(() => {
    const getDiscounts = async () => {
      const res = await fetch('/api/discounts')

      const disData = await res.json()

      setDiscounts(disData.data)

    };

    getDiscounts();
  }, []);



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

        <AddToWishlist artWorkID={artwork._id} />
      </div>
      <div className="d-flex">
      <p className="text-primary ps-4 fs-4 fw-bold">${artwork.price}</p>




        {discounts.map((discount) => (


          discount.artWorkID === artwork._id && (

            <>

              {/* <p className="text-primary ps-4 text-decoration-line-through fs-4 fw-bold">${artwork.price}</p> */}

              <p className="text-danger ps-4 fs-4 fw-bold">
              <TbDiscountOff />   ${Math.ceil(artwork.price - (artwork.price * discount.percent / 100))}
               
              </p>


            </>

          )

        ))}

      </div>



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
