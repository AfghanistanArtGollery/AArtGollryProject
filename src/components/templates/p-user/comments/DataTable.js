"use client";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import swalAlert from "@/utils/helperFunction";

export default function DataTable({ comments, title }) {
  const showCommentBody = (commentBody) => {
    swalAlert(commentBody, undefined, "OK");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-left text-uppercase mb-3" style={{ fontSize: "30px", fontWeight: 500 }}>
        {title}
      </h1>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>ArtWork</th>
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
                <td>{comment.artWorkID.name}</td>
                <td>
                  {new Array(comment.score).fill(0).map((item, index) => (
                    <FaStar key={index} />
                  ))}
                  {new Array(5 - comment.score).fill(0).map((item, index) => (
                    <FaRegStar key={index} />
                  ))}
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn ${comment.isAccept ? "btn-success" : "btn-warning"}`}
                  >
                    {comment.isAccept ? "Accepted" : "Pending Approval"}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => showCommentBody(comment.body)}
                    className="btn btn-info"
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
