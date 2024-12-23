"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";

import swalAlert from "@/utils/helperFunction";

export default function DataTable({ comments, title }) {
  const router = useRouter();

  const showCommentBody = (body) => {
    swalAlert(body, undefined, "Got it");
  };

  // change is accept field 
  const approveComment = (commentID) => {
    const updateIsAccept = async () => {
      const res = await fetch(`/api/comments/${commentID}`, {
        method: "PUT", // Use PUT instead of POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentID, // Pass the commentID, though you don't need to send it in body
        }),
      });
  
      if (res.status === 200) {
        swalAlert('Comment successfully updated', 'success', 'Ok');
      

         setTimeout(()=>{
            
          router.refresh()
          },2000)

       
      } else {
        swalAlert('Error updating comment', 'error', 'Try again');

      }
    };
    updateIsAccept();
    console.log('commentID=>', commentID);
  };

   //Deleete comment using ID
   const deleteComment = (commentID) => {
    const deleteComment = async () => {
      const res = await fetch(`/api/comments/${commentID}`, {
        method: "DELETE", // Use PUT instead of POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentID, // Pass the commentID, though you don't need to send it in body
        }),
      });
  
      if (res.status === 200) {
        swalAlert('Comment successfully Deleted', 'success', 'Ok');
        setTimeout(()=>{
            
          router.refresh()
          },2000)

      } else {
        swalAlert('Error Deleteing comment', 'error', 'Try again');
      }
    };
    deleteComment();
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
                {/* <td>{comment.artWorkID.name}</td> */}
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
                  <button onClick={()=>deleteComment(comment._id)} type="button" className={styles.delete_btn}>
                    Delete
                  </button>
                </td>
                <td>
                  
                  <button className= {comment.isAccept==false?styles.delete_btn:styles.No_approve}  onClick={()=>approveComment(comment._id)} type="button" >
                  {comment.isAccept==false?'Approve':'RemoveApprove'}
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
