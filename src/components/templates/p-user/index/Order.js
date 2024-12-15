import Link from "next/link";
import styles from "./order.module.css";

const Order = () => {
  return (
    <Link href={`/product/123`} className={styles.card}>
      <div className={styles.card_left}>
        <div className={styles.card_info}>
          <p className={styles.product_name}>40% Artwork Muhtram Nasir</p>
          <img
            className={styles.product_image}
            src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            alt="Artwork"
          />
        </div>
        <p className={styles.status}>Completed</p>
      </div>
      <div className={styles.card_right}>
        <p className={styles.timestamp}>8:00 AM 2024/12/10</p>
        <p className={styles.price}>4000$</p>
      </div>
    </Link>
  );
};

export default Order;
