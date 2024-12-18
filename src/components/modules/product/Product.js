'use client';
import Link from "next/link";
import styles from "./product.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";

const Card = ({ artwork}) => {  // Default to an empty array if images is not passed
  
  const [count, setCount] = useState(1);
  // console.log('user-product=>', artist_id)

  // Ensure images array is not empty before accessing images[0]
  const firstImage = artwork?.images?.[0] || '/path/to/default-image.jpg'; // Provide a fallback image

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length) {
      const isCart = cart.some(item => item.id === _id);
      if (isCart) {
        cart.forEach((item) => {
          if (item.id === _id) {
            item.count = item.count + count;
          }
        });
      }
      localStorage.setItem('cartart', JSON.stringify(cart));
    } else {
      const cartItem = {
        id:artwork._id,
        name: artwork.name,
        img: artwork.images,  // You might want to use firstImage here if you are storing a single image URL
        price: artwork.price,
        count,
      };
      cart.push(cartItem);
      localStorage.setItem('cartart', JSON.stringify(cart));
    }
  };

  return (
    <div className={styles.card}>
      
      <div className={styles.details_container}>
        <Image width={500} height={500}
          src={firstImage}  // Use the fallback image if images[0] is undefined
          alt={artwork.name}
        />
         <div>
        <span className={styles.price_artwork}>${artwork.price}</span>
         </div>
          
        <div className={styles.icons}>
          <div>
            <CiHeart />
            <p className={styles.tooltip}>Add To wishlist</p>
          </div>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      <Link href={`/listings/${artwork._id}`} passHref>
        <div className={styles.details}>
          <span>{artwork.name}</span>

          {/* Optionally, you can uncomment the stars section if you want ratings */}
          {/* 
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div> 
          */}

          <span>{artwork.artist_id?.name}</span>
          <span>{artwork.categoryID?.title}</span>
        </div>
      </Link>
      


    </div>
  );
};

export default Card;
