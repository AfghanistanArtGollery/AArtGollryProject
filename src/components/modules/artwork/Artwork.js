'use client';
import Link from "next/link";
import styles from "./artwork.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import AddToWishlist from "@/components/templates/artwork/AddToWishlist";

const Card = ({ artwork }) => {  // Default to an empty array if images is not passed

  const [count, setCount] = useState(1);

  const [discounts, setDiscounts] = useState([]);
  const [discountID, setDiscountID] = useState('')

  useEffect(() => {
    const getDiscounts = async () => {
      const res = await fetch('/api/discounts')

      const disData = await res.json()

      setDiscounts(disData.data)

    };

    getDiscounts();
  }, []);


  // console.log('Discounts=>', discount.percent)

  // Ensure images array is not empty before accessing images[0]
  const firstImage = artwork?.images?.[0] || '/path/to/default-image.jpg'; // Provide a fallback image

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




  return (
    <div className={styles.card}>

      <div className={styles.details_container}>
        <Image width={500} height={400}
          src={firstImage}  // Use the fallback image if images[0] is undefined
          alt={artwork.name}
        />
        <div className="d-flex justify-content-between">
          {discounts.map((discount) => (


            discount.artWorkID === artwork._id ? (

              <>

                <span className={styles.discount_price}>
                  ${Math.ceil(artwork.price - (artwork.price * discount.percent / 100))}
                </span>

                <span className={styles.price_artwork_off}>${artwork.price}</span>

              </>

            ):(

              <span className={styles.price_artwork}>${artwork.price}</span>
            )




          ))}


        </div>



        <div className={styles.icons}>
          <div>
            <CiHeart />
            <div className={styles.tooltip}>
              <AddToWishlist artWorkID={artwork._id} />

            </div>
          </div>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      <Link href={`/listings/${artwork._id}`} passHref>
        <div className={styles.details}>

          <div className="d-flex justify-content-between">
            <span>
              {artwork.name}
            </span>

            <p className="d-flex align-items-center">
              {new Array(artwork.score).fill(0).map((item, index) => (
                <FaStar key={index} />
              ))}
              {new Array(5 - artwork.score).fill(0).map((item, index) => (
                <FaRegStar key={index} />
              ))}


            </p>

          </div>




          <div className="d-flex justify-content-between">
          <span>{artwork.categoryID?.title}</span>
          <span>{artwork.artist_id?.name}</span>

          </div>

          
        </div>
      </Link>



    </div>
  );
};

export default Card;
