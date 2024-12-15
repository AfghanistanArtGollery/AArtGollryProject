import Link from "next/link";
import Order from "./Order";
import styles from "./orders.module.css";
import { FaArrowLeft } from "react-icons/fa6";

const Orders = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p>Recent Orders</p>
        <Link href="/p-user/orders">
          All Orders <FaArrowLeft />
        </Link>
      </div>
     <Order />
      {/* // <Order />
      // <Order /> */}

      <p className={styles.empty}>No orders placed</p>
    </div>
  );
};

export default Orders;
