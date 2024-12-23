"use client"

import styles from "./answer.module.css";

const Answer = ({type,answerTicket}) => {
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>{new Date(answerTicket.createdAt).toLocaleDateString('en-en')} </p>
        
        <div>
          <div>
            <p>{answerTicket.user.name}</p>
            <span>{type=='user'?'User':'Manager'}</span>
          </div>
          <img src="/images/shahin.jpg" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{answerTicket.title}</p>
        <p>{answerTicket.body}</p>
      </div>
    </section>
  );
};

export default Answer;
