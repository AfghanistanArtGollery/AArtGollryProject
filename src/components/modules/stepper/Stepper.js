import Link from "next/link";
import styles from "./stepper.module.css";
import { FaArrowRight} from "react-icons/fa6";

const Stepper = ({ step }) => {
  return (
    <div className={styles.stepper_bg}>
      <div className={styles.stepper}>
        <Link className={step == "cart" && styles.active_step} href={"/cart"}>
          Cart
        </Link>
        <FaArrowRight />
        {step === "checkout" || step === "complate" ? (
          <Link
            className={step == "checkout" && styles.active_step}
            href={"/checkout"}
          >
            Checkout
          </Link>
        ) : (
          <p>Checkout</p>
        )}
        <FaArrowRight />
        {step == "complate" ? (
          <Link
            className={step == "complate" && styles.active_step}
            href={"/complate"}
          >
            Order Complete
          </Link>
        ) : (
          <p>Order Complete</p>
        )}
      </div>
    </div>
  );
};

export default Stepper;
