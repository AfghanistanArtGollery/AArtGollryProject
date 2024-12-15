"use client";
import React from "react";
import styles from "@/styles/p-user/dataTable.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import swalAlert from "@/utils/helperFunction";

export default function DataTable({ comments, title }) {
  const showCommentBody = (commentBody) => {
    swalAlert(commentBody, undefined, "OK");
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
              <th>Date</th>
              <th>Product</th>
              <th>Rating</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{new Date(comment.date).toLocaleDateString("en-GB")}</td>
                <td>{comment.productID.name}</td>
                <td>
                  {new Array(comment.score).fill(0).map((item, index) => (
                    <FaStar key={index} />
                  ))}
                  {new Array(5 - comment.score).fill(0).map((item, index) => (
                    <FaRegStar key={index} />
                  ))}
                </td>
                <td>
                  <button type="button" className={styles.no_check}>
                    {comment.isAccept ? "Accepted" : "Pending Approval"}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(comment.body)}
                    className={styles.btn}
                  >
                    View
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
