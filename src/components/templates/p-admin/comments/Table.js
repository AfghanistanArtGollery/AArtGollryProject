"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";

import swalAlert from "@/utils/helperFunction";

export default function DataTable({ comments, title }) {
  console.log('comments table=>', comments.productID);
  const router = useRouter();

  const showCommentBody = (body) => {
    swalAlert(body, undefined, "Got it");
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
              <th>Email</th>
              <th>Score</th>
              <th>Product</th>
              <th>Submission Date</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Approve</th>
              <th>Reply</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={comment._id}>
                <td>{index + 1}</td>
                <td>{comment.username}</td>
                <td>{comment.email}</td>
                <td>{comment.score}</td>
                <td>{comment.score}</td>
                {/* <td>{comment.productID.name}</td> */}
                <td>{new Date(comment.date).toLocaleDateString("en-US")}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showCommentBody(comment.body)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Delete
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Approve
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Reply
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
