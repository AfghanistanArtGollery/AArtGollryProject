import Link from "next/link";
import styles from "./order.module.css";
import Image from "next/image";

const Order = ({artwork_id,status,order_date}) => {
  return (
    <Link href={`/product/123`} className={styles.card}>
      <div className={styles.card_left}>
        <div className={styles.card_info}>
          <p className={styles.product_name}>{artwork_id.name}</p>
          <Image
          height={50}
          width={100}
            className={styles.product_image}
            src={artwork_id.images[0]}
            alt="Artwork"
          />
        </div>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.card_right}>
        <p className={styles.timestamp}>{new Date(order_date).toLocaleDateString()}</p>
        <p className={styles.price}>${artwork_id.price}</p>
      </div>
    </Link>
  );
};

export default Order;
