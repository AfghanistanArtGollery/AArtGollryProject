"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import swalAlert from "@/utils/helperFunction";

export default function DataTable({ tickets, title }) {
  const router = useRouter();
  

  const showTicketBody = (body) => {
    swalAlert(body, undefined, "Close");
  };
  

  const answerToTicket = async (ticket) => {
    swal({
      title: "Please enter the response:",
      content: "input",
      buttons: "Submit Response",
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText,
          ticketID: ticket._id,
        };

        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        });

        if (res.status === 201) {
          swal({
            title: "Response submitted successfully",
            icon: "success",
            buttons: "Got it",
          });
        }
      }
    });
  };






  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Title</th>
              <th>Department</th>
              <th>View</th>
              <th>Delete</th>
              <th>Respond</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
           
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>
                <td>{ticket.user.name}</td>
                <td>{ticket.title}</td>
                <td>  {ticket.department.title}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => answerToTicket(ticket)} type="button" className={styles.delete_btn}>
                    Respond
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Ban
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
}
