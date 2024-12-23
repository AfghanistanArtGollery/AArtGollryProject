"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import swalAlert from "@/utils/helperFunction";

export default function DataTable({contacts, title }) {
  const router = useRouter();
  

  const showTicketBody = (body) => {
    swalAlert(body, undefined, "Close");
  };
  

  const answerToContact = async (contact) => {

    swal({
        title: "We will added function soon...",
         icon: "warning",
         button: "OK",
     });

    // swal({
    //   title: "Please enter the response:",
    //   content: "input",
    //   buttons: "Submit Response",
    // }).then(async (answerText) => {
    //   if (answerText) {
    //     const answer = {
    //       ...ticket,
    //       body: answerText,
    //       ticketID: ticket._id,
    //     };

    //     const res = await fetch("/api/tickets/answer", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(answer),
    //     });

    //     if (res.status === 201) {
    //       swal({
    //         title: "Response submitted successfully",
    //         icon: "success",
    //         buttons: "Got it",
    //       });
    //     }
    //   }
    // });
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>View</th>
              <th>Delete</th>
              <th>Respond</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
           
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.company}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showTicketBody(contact.message)}
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

                  <button onClick={() => answerToContact(contact)} type="button" className={styles.delete_btn}>
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
