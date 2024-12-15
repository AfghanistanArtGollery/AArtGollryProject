"use client"

import styles from "./answer.module.css";

const Answer = ({ type,title,body,user,createdAt}) => {
 
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>{new Date(createdAt).toLocaleDateString('en-en')} </p>
        
        <div>
          <div>
            <p>{user.name}</p>
            <span>{type=='user'?'user':'manager'}</span>
          </div>
          <img src="/images/shahin.jpg" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Answer;
