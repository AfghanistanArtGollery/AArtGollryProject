import React from "react";
import styles from "@/styles/p-user/tickets.module.css";
import Link from "next/link";
import Ticket from "./Ticket";

import Box from "@/components/modules/infoBox/InfoBox";
function Tickets({ tickets }) {
  console.log(tickets);
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>All Tickets</span>
        <Link href="/p-user/tickets/sendTicket"> Create New Ticket </Link>
      </h1>

      <div className={styles.boxes}>
        <Box title={"Open"} value={0} />
        <Box title={"Closed"} value={0} />
        <Box title={"Answered"} value={0} />
        <Box title={"Completed"} value={0} />
        <Box title={"All"} value={0} />
      </div>

      <div className={styles.filtering}>
        <div>
          <select>
            <option>All</option>
            <option>Sent</option>
            <option>Received</option>
          </select>
          <select>
            <option>All</option>
            <option>Open</option>
            <option>Closed</option>
            <option>Answered</option>
            <option>Completed</option>
          </select>
          <select>
            <option>Response Date</option>
            <option>Creation Date</option>
          </select>
        </div>
        <button type="submit">Apply</button>
      </div>

      <div>
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} {...ticket} />
        ))}
      </div>

      {tickets.length === 0 && (
        <div className={styles.empty}>
          <p>No tickets available</p>
        </div>
      )}
    </main>
  );
}

export default Tickets;
