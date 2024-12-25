import Ticket from "./Ticket";
import styles from "./tickets.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Tickets = ({ tickets }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p>Recent Tickets</p>
        <Link href="/p-user/tickets">
          All Tickets <FaArrowLeft />
        </Link>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket._id} {...ticket} />
      ))}
      {tickets.length === 0 && (

        <p className={styles.empty}>No tickets registered</p>
      )

      }
    </div>
  );
};

export default Tickets;
