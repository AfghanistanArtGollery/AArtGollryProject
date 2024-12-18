import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = ({ _id, title, hasAnswer, department }) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`} className={styles.ticket}>
      <div className={styles.ticket_left}>
        <p className={styles.title}>{title}</p>
        <p className={styles.timestamp}>2024/12/21</p>
        <p className={styles.department}>{department.title}</p>
        <p className={hasAnswer ? styles.answered : styles.not_answered}>
          {hasAnswer ? "Answered" : "Not Answered"}
        </p>
      </div>
     
    </Link>
  );
};

export default Ticket;
