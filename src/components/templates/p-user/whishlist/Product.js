"use client";
import styles from "./product.module.css";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import swal from "sweetalert";

const Card = ({ price, score, name, productID,images }) => {

   // Ensure images array is not empty before accessing images[0]
   const firstImage = images && images.length > 0 ? images[0] : '/path/to/desfault-image.jpg';  // Provide a fallback image


  const removeProduct = () => {
    swal({
      title: "Are you sure you want to remove this product?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/wishlist/${productID}`, {
          method: "DELETE",
        });
      

        if (res.status === 200) {
          swal({
            title: "Product successfully removed from your wishlist",
            icon: "success",
            buttons: "Got it",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${productID}`}>
        <img
          width={283}
          height={283}
          src={images[0]}
        
          alt={firstImage}
        />
      </Link>
      <p>{name}</p>
      <div className="d-flex justify-content-arount">
        <div >
          {new Array(score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5 - score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <span>${price.toLocaleString()} </span>
      </div>
      <button onClick={removeProduct} className={styles.delete_btn}>
        Remove Product
      </button>
    </div>
  );
};

export default Card;
